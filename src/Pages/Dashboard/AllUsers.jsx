import { AiTwotoneDelete } from "react-icons/ai";
import SectionTitle from "../../Components/Titles/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["usersData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire("Admi role created for the user!");
        refetch();
      }
    });
  };

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="w-[90%] mx-auto">
      <SectionTitle
        heading={"users"}
        subHeading={"Happy Shopping"}
      ></SectionTitle>
      <div className="flex  text-2xl font-semibold justify-between">
        <h3>Total Users: {users?.length}</h3>
        {/* <h3>Total Price: {totalPrice}</h3> */}
        {/* <button className="btn btn-secondary btn-sm">Pay</button> */}
      </div>
      <div className="my-10 ">
        <div className="overflow-x-auto rounded-xl border">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="font-bold text-xl bg-success text-white">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td className="font-semibold">{user.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <p className="font-bold">Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-sm btn-secondary text-white"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default AllUsers;
