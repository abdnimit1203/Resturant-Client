import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { BsCartCheckFill } from "react-icons/bs";

import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          color: "green",
          title: "User Logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err.message));
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active  text-primary" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active  text-primary" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active  text-primary" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/our-menu"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active  text-primary" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Our Menu
      </NavLink>
      <NavLink
        to="/our-shop/Salads"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active  text-primary" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        Our Shop
      </NavLink>
      {/* <NavLink
        to="/cart"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active  text-primary" : "",
            isTransitioning ? "transitioning" : "",
          ].join(" ")
        }
      >
        <img src="/assets/icon/cart.png" alt="cart" className="w-14" />
      </NavLink> */}
      <Link to={"/cart"}>
        <button className="btn btn-ghost">
        <BsCartCheckFill className="text-3xl text-primary" />

          <div className="badge badge-accent">+99</div>
        </button>
      </Link>
      {user ? (
        <>
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img
                src={user?.photoURL || "https://i.ibb.co/5x6DN2n/blank-dp.png"}
              />
            </div>
          </div>
          <h3>{user?.displayName}</h3>
          <button
            onClick={handleLogOut}
            className="btn btn-circle capitalize btn-error"
            title={user?.email}
          >
            Log Out
          </button>
        </>
      ) : (
        <NavLink
          to="/login"
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? "pending" : "",
              isActive ? "active  text-primary" : "",
              isTransitioning ? "transitioning" : "",
            ].join(" ")
          }
        >
          Login
        </NavLink>
      )}
    </>
  );
  return (
    <div className="drawer z-10">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col fixed w-full">
        {/* Navbar */}
        <div className="w-full navbar bg-opacity-70 bg-neutral-800 text-base-100 ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 logo text-xl md:text-3xl font-bold ">
            <h1>
              Bistro Cafe{" "}
              <span className="block font-normal text-lg md:text-2xl leading-relaxed">
                {" "}
                Restaurant
              </span>{" "}
            </h1>
          </div>
          <div className="flex-none hidden lg:block">
            <div className="menu menu-horizontal gap-4 uppercase font-bold text-lg items-center">
              {/* Navbar menu content here */}
              {navLinks}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full   bg-neutral-600 text-base-100 flex items-center font-bold text-lg gap-6 pt-10 uppercase">
          {/* Sidebar content here */}

          {navLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
