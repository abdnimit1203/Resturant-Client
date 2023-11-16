import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from './../Layout/MainLayout';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";

export const  router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            index: true,
            element:<Home/>
        },
        {
            path: "/our-menu",
            element:<Menu/>
        },
        {
            path: "/our-shop/:category",
            element:<OurShop/>
        },
        {
            path: "/login",
            element:<Login/>
        },
        
      ]
    },
  ]);