import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../Components/Forms/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl text-center py-10">PAYMENT</h2>
      </div>
      <div className="w-[80%] mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
