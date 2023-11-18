import { AiFillHome, AiOutlineMenuFold } from "react-icons/ai";
import { BsCalendar, BsCart2, BsMenuButton } from "react-icons/bs";
import { FaHome, FaMoneyBillWave } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col   pt-20">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute top-0 right-0 "
        >
          Dashboard <AiOutlineMenuFold />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-yellow-600 text-base-content font-semibold text-lg space-y-2">
          {/* Sidebar content here */}
          <li>
            <div className="flex-1 px-2 mx-2 logo text-xl md:text-3xl font-bold ">
              <h3>
                Bistro Cafe
                <span className="block font-medium text-lg md:text-2xl leading-relaxed">
                  Restaurant
                </span>
              </h3>
            </div>
          </li>
          <li>
            <NavLink
              to={"home"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaHome />User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"reservation"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <BsCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"payment-history"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <FaMoneyBillWave /> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <BsCart2 /> My Cart ({cart?.length})
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-review"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Add Review
            </NavLink>
          </li>
          <div className="divider border-white"></div>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
             <AiFillHome/> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
             <BsMenuButton/> Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
