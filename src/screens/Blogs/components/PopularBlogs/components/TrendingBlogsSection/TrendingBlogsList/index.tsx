import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { BlogPost } from "~/core/types";
import ItemBlogTrending from "./ItemBlogTrending";

type TrendingBlogsListProps = {
    blogs: BlogPost[];
};

const TrendingBlogsList: React.FC<TrendingBlogsListProps> = memo(({ blogs }) => {
    const { t } = useTranslation("global");

    if (blogs.length === 0) {
        return (
            <div className="popular-blogs__container__trending__content__empty">
                <img src="https://i.pinimg.com/736x/d7/82/8d/d7828da6de1856d63a4e30ceb9ad257f.jpg" alt="" />
                <p>{t("empty_data.title")}</p>
            </div>
        );
    }

    return (
        <>
            {blogs.map((item, index) => (
                <ItemBlogTrending key={`trending-blog-${item.id || index}`} dataTrending={item} />
            ))}
        </>
    );
});

TrendingBlogsList.displayName = "TrendingBlogsList";

export default TrendingBlogsList;
