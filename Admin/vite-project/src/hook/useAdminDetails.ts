import { useQuery } from "@tanstack/react-query";
import { getToken } from "../utils/getTocken";
import { apiServer } from "../constant/apiclient";
const fetchAdminDetails = async () => {
    const { data } = await apiServer.get("/details");
    return data?.data || data;
};

export const useAdminDetails = () => {
    return useQuery({
        queryKey: ["admin-details"],
        queryFn: fetchAdminDetails,
        staleTime: 5 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
        enabled: !!getToken()
    });
};