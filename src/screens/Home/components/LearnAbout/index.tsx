import { useTranslation } from "react-i18next";
import { WrapperLayoutPresent, WrapperSection } from "~/core/components";
import { useGetBlogsByTags } from "~/core/hooks";
import ItemLearnAbout from "./components/ItemLearnAbout";
import "./styles.scss";
import { useMemo } from "react";

const LearnAbout: React.FC = () => {
    const { t } = useTranslation("global");

    const { blogs } = useGetBlogsByTags("learn-about", 3);

    const renderContent = useMemo(() => {
        if (blogs.length < 3) {
            return (
                <WrapperLayoutPresent type="row">
                    {blogs.length > 0 && <ItemLearnAbout />}

                    {blogs.length > 2 && (
                        <div className="learn__about__group_item">
                            <ItemLearnAbout type="small" />
                            <ItemLearnAbout type="small" />
                        </div>
                    )}

                    {blogs.length > 3 && <ItemLearnAbout />}
                </WrapperLayoutPresent>
            );
        }

        return (
            <WrapperLayoutPresent type="row" colums={2}>
                {blogs.length > 0 && <ItemLearnAbout data={blogs[0]} />}

                {blogs.length > 2 && (
                    <div className="learn__about__group_item">
                        <ItemLearnAbout type="small" data={blogs[1]} />
                        <ItemLearnAbout type="small" data={blogs[2]} />
                    </div>
                )}

                {blogs.length > 3 && <ItemLearnAbout data={blogs[3]} />}
            </WrapperLayoutPresent>
        );
    }, [blogs]);

    return (
        <WrapperSection
            title={
                <h1 className="title__section">
                    {t("home.title-learn-about.first")} <span>{t("home.title-learn-about.second")}</span>
                </h1>
            }
        >
            {renderContent}
        </WrapperSection>
    );
};

export default LearnAbout;
