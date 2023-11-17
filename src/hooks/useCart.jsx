import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthContext from "./useAuthContext";


const useCart = () => {
    const axisoSecure = useAxiosSecure()
    const {user} = useAuthContext()
   //tan stack query
   const {data: cart=[] ,refetch} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async() =>{
        const res = await axisoSecure.get(`/carts?email=${user?.email}`)
        return res.data
    }
   })
   return [cart,refetch]
};

export default useCart;