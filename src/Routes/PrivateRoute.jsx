import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import Swal from "sweetalert2";

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuthContext()
    const location = useLocation()
    
    if(loading){
        return <><span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span></>
    }else{

        if(user){
            return children
        }else{
            Swal.fire({
                position: "top-center",
                icon: "warning",
                color: "white",
                title: "You have to log in first",
                showConfirmButton: false,
                timer: 2000,
                background: "#3bb1ff"
              });
        }
      
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default PrivateRoute;