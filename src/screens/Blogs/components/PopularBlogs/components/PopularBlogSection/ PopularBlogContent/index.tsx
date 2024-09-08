import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BlogPost } from "~/core/types";
import PATHS from "~/core/constants/path";

type PopularBlogContentProps = {
    blog: BlogPost;
};

const PopularBlogContent: React.FC<PopularBlogContentProps> = memo(({ blog }) => (
    <Link to={`/${PATHS.BLOG}/${blog.id}`} className="popular-blogs__container__popular__content">
        {blog.sections?.[0]?.images?.[0]?.url && <img src={blog.sections[0].images[0].url} alt={blog.title} />}
        {/* <div className="popular-blogs__container__popular__content__info">
            <h2>{blog.title}</h2>
            <p>{blog.sections?.[0]?.contents?.[0]}</p>
        </div> */}
    </Link>
));

PopularBlogContent.displayName = "PopularBlogContent";

export default PopularBlogContent;
