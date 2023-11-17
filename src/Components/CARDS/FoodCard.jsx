import PropTypes from "prop-types";
import useAuthContext from "../../hooks/useAuthContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      console.log(food);
      console.log(cartItem);

      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire(`"${name}" added to cart!`);
        }
      });
    } else {
      Swal.fire({
        title: "You have to log in to add to cart!",
        text: "Do you want to log in now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  return (
    <div className="flex flex-col bg-slate-100 relative">
      <img
        src={`${image}`}
        alt="card-image-salad"
        className="aspect-video object-cover"
      />
      <p className="absolute bg-black text-white p-1 px-2 right-3 top-3">
        ${price}
      </p>
      <div className="flex flex-col justify-center text-center py-6 gap-3 p-6">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="">{recipe}</p>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn  col-span-2  mx-auto my-2  border-b-4 border-b-[#BB8506] text-[#BB8506] hover:bg-black hover:text-[#BB8506]"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FoodCard;
