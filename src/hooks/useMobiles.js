import ms from "ms";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient("/product");  

const useMobiles = (searchTerm = '') => useQuery({
    queryKey: ['mobiles', searchTerm],
    queryFn: () => apiClient.getAll().then(data => 
        data.filter(mobile => 
            (mobile.brand && mobile.brand.toLowerCase().includes(searchTerm.toLowerCase())) || 
            (mobile.model && mobile.model.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    ),
    staleTime: ms('1h')
});

export default useMobiles;