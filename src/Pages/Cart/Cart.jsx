import useCart from "../../hooks/useCart";
import { AiTwotoneDelete } from "react-icons/ai";
import SectionTitle from "../../Components/Titles/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };
  return (
    <div className="w-[90%] mx-auto">
      <SectionTitle
        heading={"Cart"}
        subHeading={"Happy Shopping"}
      ></SectionTitle>
      <div className="flex  text-2xl font-semibold justify-between">
        <h3>Total Item: {cart.length}</h3>
        <h3>Total Price: {totalPrice}</h3>
       {cart?.length ? <Link to={'/dashboard/reservation'}>
        
        <button className="btn btn-secondary btn-sm text-white">Pay</button>
        </Link>
        :
        <button disabled={true} className="btn btn-secondary btn-sm text-white">Pay</button>
      }
      </div>
      <div className="my-10 ">
        <div className="overflow-x-auto rounded-xl border">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="font-bold text-xl bg-success text-white">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={item.image}
                      alt="image"
                      className="w-16 rounded-lg"
                    />
                  </td>
                  <td className="font-semibold">{item.name}</td>
                  <td>${item.price}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-error bg-rose-600 capitalize text-xl"
                    >
                      <AiTwotoneDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
