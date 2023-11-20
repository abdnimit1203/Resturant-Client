import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/Titles/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { ImSpoonKnife } from "react-icons/im";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);

  // update

  const axiosPublic = useAxiosPublic(); // for image uploading in img bb
  const axiosSecure = useAxiosSecure(); // for recipe item add in server
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to server with image
      const menuItem = {
        name: data.recipeName,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipeDetails,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${item?._id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount>0) {
        // show success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Updated to the menu 🍴",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url: ", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Redesign you recipe"}
      ></SectionTitle>
      <div className="w-[80%] mx-auto bg-sky-200  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body md:w-[90%] mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              type="text"
              defaultValue={item?.name}
              className="input input-bordered"
              {...register("recipeName", { required: true })}
            />

            {errors.recipeName && (
              <span className="text-red-400 font-bold text-left">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control grid md:grid-cols-2 gap-3">
            <div>
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={item?.category}
                className="select select-bordered w-full max-w-xs"
                {...register("category")}
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={item?.price}
                className="input input-bordered"
                {...register("price", { required: true, min: 0, max: 99 })}
              />

              {errors.price && (
                <span className="text-red-400 font-bold text-left">
                  This field is required (0-99)
                </span>
              )}
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              type="text"
              defaultValue={item?.recipe}
              className="textarea textarea-bordered"
              {...register("recipeDetails", { required: true })}
            />

            {errors.recipeDetails && (
              <span className="text-red-400 font-bold text-left">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <input 
            // defaultValue={item?.image}
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs my-4"
            />
          </div>
          <div className="form-control mt-6">
            <button
              className="form-control mt-6 btn btn-accent btn-sm p-6 w-fit flex text-white"
              type="submit"
            >
              UPDATE Item{" "}
              <span>
                <ImSpoonKnife />
              </span>{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
