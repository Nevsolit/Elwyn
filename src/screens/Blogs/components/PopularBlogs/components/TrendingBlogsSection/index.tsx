import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { BlogPost } from "~/core/types";
import TrendingBlogsList from "./TrendingBlogsList";

type TrendingBlogsSectionProps = {
    blogs: BlogPost[];
};

const TrendingBlogsSection: React.FC<TrendingBlogsSectionProps> = memo(({ blogs }) => {
    const { t } = useTranslation("global");

    return (
        <div className="popular-blogs__container__trending">
            <h1 className="popular-blogs__container__trending__title">{t("blogs.trending")}</h1>
            <div className="popular-blogs__container__trending__content">
                <TrendingBlogsList blogs={blogs} />
            </div>
        </div>
    );
});

TrendingBlogsSection.displayName = "TrendingBlogsSection";

export default TrendingBlogsSection;
