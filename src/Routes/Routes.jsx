import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from './../Layout/MainLayout';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";

export const  router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/our-menu",
            element:<PrivateRoute><Menu/></PrivateRoute>
        },
        {
            path: "/our-shop/:category",
            element: <OurShop/> 
        },
     
        {
            path: "/login",
            element:<Login/>
        },
        {
            path: "/signup",
            element:<SignUp/>
        },
        
      ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            {
                index:true,
                path: "home",
                element: <DashboardHome/>
            },
            {
                path:'cart',
                element: <Cart></Cart>
            },
            {
                path:'all-users',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute> 
            }
        ]
    }
  ]);