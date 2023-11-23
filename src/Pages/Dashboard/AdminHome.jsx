import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../hooks/useAuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { BsCarFront, BsWallet } from "react-icons/bs";
import { FaMap, FaProductHunt, FaUsers } from "react-icons/fa";

import useAxiosPublic from "../../hooks/useAxiosPublic";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid ,PieChart, Pie,  Legend} from "recharts";

const colors = ["#5cb3fd", "#00C49F", "#FFB328",  "#a431f3", "red", "pink", 'orange'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#b345ff',"red", "pink", 'orange'];
const AdminHome = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  //   const [category ,setCategory] = useState([])

  const { data: stats, isLoading } = useQuery({
    queryKey: ["stats-key"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  const { data: category } = useQuery({
    queryKey: ["category-key"],
    queryFn: async () => {
      const res = await axiosPublic.get("/category-count");
      return res.data;
    },
  });
  console.log(category);
const pieCategory = category?.map(data=>{
    return {name: data.category, count: data.count}
})
  // bar chart custom functions
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  // pie chart func
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
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
            {isLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <p className="text-xl ">
                {parseFloat(stats?.revenue).toFixed(2)}
              </p>
            )}

            <p>Revenue</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-amber-700 w-48  to-amber-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <FaUsers className="text-5xl" />
          </div>
          <div>
            {isLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <p className="text-xl ">{stats?.userCount}</p>
            )}

            <p>Customers</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-500 w-48  to-rose-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <FaProductHunt className="text-5xl" />
          </div>
          <div>
            {isLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <p className="text-xl ">{stats?.menuCount}</p>
            )}

            <p>Products</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 w-48  to-blue-200 text-white font-bold flex gap-6 justify-center py-6 rounded-xl">
          <div>
            <BsCarFront className="text-5xl" />
          </div>
          <div>
            {isLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <p className="text-xl ">{stats?.orderCount}</p>
            )}

            <p>Orders</p>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden py-10 h-[300px]">
        <p className="text-xl font-semibold text-secondary py-4">
          <FaMap className="text-blue-500 inline text-5xl" /> RESTAURANT
          LOCATION
        </p>
        <div className="w-[600px]  h-[300px]" id="embedded-map-display">
          <iframe
            className="w-full h-[300px] rounded-xl"
            src="https://www.google.com/maps/embed/v1/place?q=Uttara,+Dhaka,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
      <div className="flex justify-around">
        <div>
          <div className="my-10">
            <h2>Charts: Categoty Counts</h2>
            <BarChart
              width={450}
              height={280}
              data={category}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="count"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {category?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 7]} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
        <div>
        <PieChart width={400} height={400}>
          <Pie
            data={pieCategory}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            
            fill="#8884d8"
            dataKey="count"
          >
            {pieCategory?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend ></Legend>
        </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
