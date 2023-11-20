import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../Components/Titles/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, isLoading,refetch] = useMenu();
  console.log(menu);
const axiosSecure = useAxiosSecure()

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
    }).then(async(result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`)
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
    
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage Items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
   {isLoading ? (
        <>
          <img src="/assets/others/loader2.gif" alt="loading..." />
        </>
      ) :

      <div className="my-10  px-6">
        <h2 className="uppercase font-cinzel text-2xl font-bold my-4">Total Items : {menu?.length}</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="font-bold text-xl bg-secondary text-white">
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { menu?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td><img src={item?.image} alt="item image" className="w-20 " /></td>
                  <td className="font-semibold">{item?.name}</td>
                  <td className="font-semibold">${item?.price}</td>
                  <td>
                    <Link to={`/dashboard/update-item/${item._id}`}>
                    
                      <button
                        // onClick={() => handleMakeAdmin(item)}
                        className="btn btn-sm btn-secondary text-white"
                      >
                        <FaEdit />
                      </button>
                    </Link>
            
                  </td>

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
   }
    </div>
  );
};

export default ManageItems;
