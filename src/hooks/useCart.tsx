import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCart = () => {
  const axiosPublic = useAxiosPublic();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosPublic.get("/carts");
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
