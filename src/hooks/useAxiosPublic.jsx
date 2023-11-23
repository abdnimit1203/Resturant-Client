import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistroboss-restraunt.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;