import { useEffect, useState } from "react";
import { getItemsByCategory } from "../services";
import { ResourcesPost } from "../types";

const useGetServiceByCategory = (category: string, limit?: number) => {
    const [data, setData] = useState<{
        items: ResourcesPost[];
        isLoading: boolean;
    }>({
        items: [],
        isLoading: true
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getItemsByCategory(
                    "resources", 
                    category, 
                    limit
                ) as ResourcesPost[];
                
                setData({
                    items: response || [],
                    isLoading: false
                });
            } catch (error) {
                setData({
                    items: [],
                    isLoading: false
                });
                console.error("Error fetching services:", error);
            }
        };

        fetchData();
    }, [category, limit]);

    return data;
};

export default useGetServiceByCategory;