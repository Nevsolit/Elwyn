import { useEffect, useState } from "react";
import { BlogPost } from "../types";
import { getItemsByTags } from "../services";

const useGetBlogsByTags = (tags: string, limit: number) => {

    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    const handleFetchIntroduce = async () => {
        try {
            const response = (await getItemsByTags("blogs", tags, limit)) as BlogPost[];

            if (response) {
                setBlogs(response);
            }
        } catch (error) {}
    };

    useEffect(() => {
        handleFetchIntroduce();
    }, []);


    return {blogs};
}

export default useGetBlogsByTags;