import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BsCarFront, BsWallet } from "react-icons/bs";
import { FaMap, FaProductHunt, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["stats-key"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-xl font-bold text-center mb-10">
        <h2>ADMIN DASHBOARD</h2>
        <p className="text-base text-blue-500 font-cinzel font-normal">
          Welcome, {user?.displayName}
        </p>
      </div>
      {/* admin dashboard stats cards*/}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-purple-700 w-48  to-purple-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <BsWallet className="text-5xl" />
          </div>
          <div>
            <p className="text-xl ">

            {parseFloat(stats?.revenue).toFixed(2)}
            </p>
            <p>
                Revenue
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-700 w-48  to-amber-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <FaUsers className="text-5xl" />
          </div>
          <div>
            <p className="text-xl ">

            {stats?.userCount}
            </p>
            <p>
                Curtomers
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-500 w-48  to-rose-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <FaProductHunt className="text-5xl" />
          </div>
          <div>
            <p className="text-xl ">

            {stats?.menuCount}
            </p>
            <p>
                Products
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 w-48  to-blue-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <BsCarFront className="text-5xl" />
          </div>
          <div>
            <p className="text-xl ">

            {stats?.orderCount}
            </p>
            <p>
                Orders
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  py-10 h-[300px]">
        <p className="text-xl font-semibold text-secondary py-4"><FaMap className="text-blue-500 inline text-5xl"/> RESTAURANT LOCATION</p>
        <div className="w-[600px]  h-[300px]" id="embedded-map-display">
          <iframe
            className="w-full h-[300px] rounded-xl"
            src="https://www.google.com/maps/embed/v1/place?q=Uttara,+Dhaka,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
