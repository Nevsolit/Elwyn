import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { BlogPost } from "~/core/types";
import PopularBlogContent from "./ PopularBlogContent";

type PopularBlogSectionProps = {
    blog: BlogPost;
};

const PopularBlogSection: React.FC<PopularBlogSectionProps> = memo(({ blog }) => {
    const { t } = useTranslation("global");

    return (
        <div className="popular-blogs__container__popular">
            <h1 className="popular-blogs__container__popular__title">{t("blogs.popular")}</h1>
            <PopularBlogContent blog={blog} />
        </div>
    );
});

PopularBlogSection.displayName = "PopularBlogSection";

export default PopularBlogSection;
