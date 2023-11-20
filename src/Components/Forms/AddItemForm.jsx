import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
 
const AddItemForm = () => {
    const axiosPublic  = useAxiosPublic() // for image uploading in img bb
    const axiosSecure  = useAxiosSecure() // for recipe item add in server
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    console.log(data)
    //image upload to imgbb and then get an url
    const imageFile  = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers:{
            'content-type': 'multipart/form-data'
        }
    })
    if(res.data.success){
        //now send the menu item data to server with image
        const menuItem = {
            recipeName: data.recipeName,
            category: data.category,
            price: parseFloat(data.price) ,
            recipeDetails: data.recipeDetails,
            image: res.data.data.display_url

        }
        const menuRes = await axiosSecure.post('/menu', menuItem)
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            // show success popup
            console.log('success');
        }
    }
    console.log('with image url: ' , res.data)
}
  return (
    <div className="w-[80%] mx-auto bg-gray-200  ">
         <form  onSubmit={handleSubmit(onSubmit)} className="card-body md:w-[90%] mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Name</span>
          </label>
          <input type="text" placeholder="Recipe Name" className="input input-bordered" {...register("recipeName", { required: true })} />
       
        {errors.recipeName && <span className="text-red-400 font-bold text-left">This field is required</span>}
        </div>
        <div className="form-control grid md:grid-cols-2 gap-3">
          <div>
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select defaultValue={"default"}
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
          <input type="number" placeholder="Price"   className="input input-bordered" {...register("price", { required: true ,min:0 , max:99})} />
       
        {errors.price && <span className="text-red-400 font-bold text-left">This field is required (0-99)</span>}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea type="text" placeholder="Recipe Name" className="textarea textarea-bordered" {...register("recipeDetails", { required: true })} />
       
        {errors.recipeDetails && <span className="text-red-400 font-bold text-left">This field is required</span>}
        </div>
        <div className="form-control">
        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs my-4" />
        </div>
        <div className="form-control mt-6">
         
          <input  className="form-control mt-6 btn btn-secondary text-white" type="submit" value={"Add Item"} />
        </div>
      </form>
      
    </div>
  );
};

export default AddItemForm;
