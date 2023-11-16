
import PropTypes from "prop-types";
const FoodCard = ({item}) => {
    const {name,image, price,recipe} = item
    return (
        <div className="flex flex-col bg-slate-100 relative">
          <img
            src={`${image}`}
            alt="card-image-salad"
            className="aspect-video object-cover"
          />
          <p className="absolute bg-black text-white p-1 px-2 right-3 top-3">${price}</p>
          <div className="flex flex-col justify-center text-center py-6 gap-3 p-6">
            <h3 className="font-bold text-xl">{name}</h3>
            <p className="">{recipe}</p>
            <button className="btn  col-span-2  mx-auto my-2  border-b-4 border-b-[#BB8506] text-[#BB8506] hover:bg-black hover:text-[#BB8506]">
              ADD TO CART
            </button>
          </div>
        </div>
    );
};
FoodCard.propTypes = {
    item: PropTypes.object.isRequired
  };
export default FoodCard;