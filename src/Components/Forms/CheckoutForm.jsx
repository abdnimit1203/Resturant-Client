import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuthContext from "../../hooks/useAuthContext";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuthContext();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if(totalPrice>0){

      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error?.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        

        //saving the payment history in database
        const payment = {
          email: user.email,
          amount: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartId: cart.map((item) => item._id),
          menuItemId: cart.map((item) => item.menuId),
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment saved : ", res.data);
        Swal.fire({
          title: "Payment Success!",
          text: `Amount: $${paymentIntent.amount / 100}\n\n Transaction Id:$${
            paymentIntent.id
          }`,
          icon: "success",
        });
        refetch()

      }
      
    }
    
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          type="submit"
          className="btn btn-success my-10 btn-wide"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-error">{error}</p>
        {transactionId && (
          <p className="text-xl text-success fontbold">
            Transaction Id: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
