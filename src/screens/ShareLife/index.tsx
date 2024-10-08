import { WrapperSection } from "~/core/components";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import ItemShareLife from "./components/ItemShareLife";
import { useGetBlogsByTags } from "~/core/hooks";
import { useMemo } from "react";
import fakeData from "~/core/utils/fakeData";

const ShareLifeScreen: React.FC = () => {
    const [t] = useTranslation("global");

    const { blogs, loading } = useGetBlogsByTags("life");

    const renderContent = useMemo(() => {
        return (
            <div className="share-life__container__wrapper">
                {loading
                    ? fakeData(3).map((_, index) => (
                          <div className="skeleton-item-share-life" key={`fake-item-share-like-${index}`} />
                      ))
                    : blogs.length > 0
                    ? blogs.map((blog) => <ItemShareLife key={blog.id} data={blog} />)
                    : // <EmptyData />
                      fakeData(3).map((_, index) => (
                          <div className="skeleton-item-share-life" key={`fake-item-share-like-${index}`} />
                      ))}
            </div>
        );
    }, [blogs]);

    return (
        <div className="share-life__container">
            <WrapperSection
                title={
                    <div className="title__section-v2">
                        <h1>{t("share-life.title")}</h1>
                        <p>{t("share-life.description")}</p>
                    </div>
                }
            >
                {renderContent}
            </WrapperSection>
        </div>
    );
};

export default ShareLifeScreen;
