import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuthContext from "../hooks/useAuthContext";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const AdminRoute = ({children}) => {
    const {user,loading} = useAuthContext()
    const [isAdmin ,isAdminLoading] =useAdmin()
    const location = useLocation()
    console.log(isAdmin);
    if(loading || isAdminLoading){
        return <><img src="/assets/others/loader3.gif" alt="loader" /></>
    }else{

        if(user && isAdmin){
            return children
        }else{
            Swal.fire({
                position: "top-center",
                icon: "warning",
                color: "white",
                title: "Opps! you are not Admin!",
                showConfirmButton: false,
                timer: 2000,
                background: "#3bb1ff"
              });
        }
      
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default AdminRoute;