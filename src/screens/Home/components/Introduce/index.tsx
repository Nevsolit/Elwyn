import { useTranslation } from "react-i18next";
import { WrapperLayoutPresent, WrapperSection } from "~/core/components";

import { useMemo } from "react";
import { useGetBlogsByTags } from "~/core/hooks";
import fakeData from "~/core/utils/fakeData";
import ItemIntroduce from "./components/ItemIntroduce";

const Introduce: React.FC = () => {
    const { t } = useTranslation("global");

    const { blogs } = useGetBlogsByTags("introduce", 3);

    const renderContent = useMemo(() => {
        return (
            <WrapperLayoutPresent type="long-short">
                {blogs.length > 2
                    ? blogs.map((blog) => <ItemIntroduce key={blog.id} data={blog} />)
                    : fakeData(3).map((_, index) => <ItemIntroduce key={`fake-item-introduce-${index}`} />)}
            </WrapperLayoutPresent>
        );
    }, [blogs]);

    return (
        <WrapperSection
            title={
                <h1 className="title__section">
                    {t("home.title-introduce.first")}
                    <span>{t("home.title-introduce.second")}</span>
                    {t("home.title-introduce.third")}
                </h1>
            }
        >
            {renderContent}
        </WrapperSection>
    );
};

export default Introduce;
