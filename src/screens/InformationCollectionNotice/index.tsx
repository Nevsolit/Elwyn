import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";
import "./styles.scss";

const InformationCollectionNotice: React.FC = () => {
    const { t } = useTranslation("global");

    const informationCollectionNotice = [
        {
            title: t("information-collection-notice.introduction"),
            description: t("information-collection-notice.des-introduction"),
        },
        {
            title: t("information-collection-notice.information-collected"),
            description: t("information-collection-notice.des-information-collected"),
        },
        {
            title: t("information-collection-notice.purpose-of-collection"),
            description: t("information-collection-notice.des-purpose-of-collection"),
        },
        {
            title: t("information-collection-notice.data-retention"),
            description: t("information-collection-notice.des-data-retention"),
        },
        {
            title: t("information-collection-notice.your-choices"),
            description: t("information-collection-notice.des-your-choices"),
        },
        {
            title: t("information-collection-notice.contact-information"),
            description: t("information-collection-notice.des-contact-information"),
        },
    ];

    return (
        <div className="information_collection_notice__container">
            <WrapperSection>
                <div className="information_collection_notice__container__wrapper">
                    <h1 className="title__v2">{t("privacy-policy.title")}</h1>
                    <hr />
                    {informationCollectionNotice.map((items, index) => (
                        <div key={index} className="box__content__v2">
                            <h2>{items.title}</h2>
                            <p>{items.description}</p>
                        </div>
                    ))}
                </div>
            </WrapperSection>
        </div>
    );
};

export default InformationCollectionNotice;
