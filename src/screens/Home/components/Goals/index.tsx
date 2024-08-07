import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { WrapperLayoutPresent, WrapperSection } from "~/core/components";
import { useGetBlogsByTags } from "~/core/hooks";
import fakeData from "~/core/utils/fakeData";
import ItemGoals from "./components/ItemGoals";

const Goals: React.FC = () => {
    const { t } = useTranslation("global");

    const { blogs } = useGetBlogsByTags("goals", 2);

    const renderContent = useMemo(() => {
        return (
            <WrapperLayoutPresent type="long-short">
                {blogs.length > 1
                    ? blogs.map((blog, index) => (
                          <ItemGoals
                              key={blog.id}
                              className={`${index % 2 ? "md:flex-1" : "md:flex-[2]"}`}
                              data={blog}
                          />
                      ))
                    : fakeData(2).map((_, index) => (
                          <ItemGoals
                              key={`fake-item-goals-${index}`}
                              className={`${index % 2 ? "md:flex-1" : "md:flex-[2]"}`}
                          />
                      ))}
            </WrapperLayoutPresent>
        );
    }, [blogs]);

    return (
        <WrapperSection
            title={
                <h1 className="title__section">
                    {t("home.title-goals.first")}
                    <span>{t("home.title-goals.second")}</span>
                    {t("home.title-goals.third")}
                    <span>{t("home.title-goals.fourth")}</span>
                </h1>
            }
        >
            {renderContent}
        </WrapperSection>
    );
};

export default memo(Goals);
