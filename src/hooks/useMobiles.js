import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient("/product");  

const useMobiles = () => useQuery({
    queryKey: ['mobiles'],
    queryFn: () => apiClient.getAll()
});

export default useMobiles;