import { useEffect, useState } from "react";
import { BlogPost } from "../types";
import { getItemsByTags } from "../services";

const useGetBlogsByTags = (tags: string, limit?: number) => {

    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFetchIntroduce = async () => {
        setLoading(true);
        try {
            let response;
            if(limit) {
                 response = (await getItemsByTags("blogs", tags, limit)) as BlogPost[];
            } else {
                response = (await getItemsByTags("blogs", tags)) as BlogPost[];
            }

            if (response) {
                setBlogs(response);
            }
        } catch (error) {}
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        handleFetchIntroduce();
    }, []);


    return {blogs, loading};
}

export default useGetBlogsByTags;