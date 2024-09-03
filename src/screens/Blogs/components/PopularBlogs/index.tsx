import React, { memo } from "react";
import { BlogPost } from "~/core/types";
import "./styles.scss";
import PopularBlogSection from "./components/PopularBlogSection";
import TrendingBlogsSection from "./components/TrendingBlogsSection";

type PopularBlogsProps = {
    dataPopular?: BlogPost;
    dataTrending?: BlogPost[];
};

const PopularBlogs: React.FC<PopularBlogsProps> = memo(({ dataPopular, dataTrending = [] }) => {
    return (
        <div className="popular-blogs__container">
            {dataPopular && <PopularBlogSection blog={dataPopular} />}
            <TrendingBlogsSection blogs={dataTrending} />
        </div>
    );
});

PopularBlogs.displayName = "PopularBlogs";

export default PopularBlogs;
