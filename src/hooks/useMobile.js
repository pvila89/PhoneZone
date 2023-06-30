import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient('/product');

const useMobile = (id) => useQuery({
    queryKey: ['mobiles', id],
    queryFn: () => apiClient.get(id)
});

export default useMobile;