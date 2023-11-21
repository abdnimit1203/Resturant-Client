import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecure from "./useAxiosSecure";

const usePaymentHistory = () => {
    const axisoSecure = useAxiosSecure()
    const {user} = useAuthContext()
   //tan stack query
   const {data: payments=[] , refetch} = useQuery({
    queryKey: ['payments',user?.email],
    queryFn: async() =>{
        const res = await axisoSecure.get(`/payments?email=${user?.email}`)
        return res.data
    }
   })
   return [payments,refetch]
};

export default usePaymentHistory;