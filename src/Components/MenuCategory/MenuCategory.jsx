import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const MenuCategory = ({ items, image, title }) => {
  return (
    <div className="mx-auto">
      {title && (
        <div className="hero py-10" style={{backgroundImage: `url(${image})`}}>
  
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[80%] p-10 bg-black bg-opacity-60 text-white">
          <h1 className="font-['cinzel']">{title}</h1>
                  <p>
                    Lorem Ipsum has been the industrys standard dummy text ever since
                    the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
          </div>
        </div>
      </div>
      )}
     
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] mx-auto py-10">
        {items?.map((item) => (
          <div
            key={item._id}
            className="flex gap-6  justify-center items-center"
          >
            <div className="">
              <img
                src={item.image}
                alt="menu-item"
                className="rounded-full rounded-ss-lg aspect-square object-cover "
              />
            </div>
            <div>
              <h2 className="text-xl py-2">{item.name}</h2>
              <p>{item.recipe}</p>
            </div>
            <div>
              <p className="text-[#BB8506]">${item.price}</p>
            </div>
          </div>
        ))}
      <Link to={`/our-shop/${title}`} className="btn btn-wide col-span-2 mx-auto my-10 btn-ghost border-b-4 border-b-black hover:btn-neutral">
        
        <button 
        >
          Order Your Favourite Food
        </button>
        </Link>
      </div>
    </div>
  );
};
MenuCategory.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.object.isRequired,
};
export default MenuCategory;
