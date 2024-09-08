import { WrapperSection } from "~/core/components";

import "./styles.scss";
import { useGetBlogsByTags } from "~/core/hooks";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const SlideWork: React.FC = () => {
    const { t } = useTranslation("global");

    const { blogs } = useGetBlogsByTags("work", 1);

    return (
        <WrapperSection
            title={
                <h1 className="title__section">
                    {t("home.slide-work.first")}
                    <span>{t("home.slide-work.second")}</span>
                </h1>
            }
        >
            <div className="slide__work__container">
                {blogs.length > 0 && <img src={blogs[0].sections[0].images[0]?.url} alt={blogs[0]?.title} />}
            </div>
        </WrapperSection>
    );
};

export default memo(SlideWork);
