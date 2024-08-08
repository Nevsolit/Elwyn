import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";
import "./styles.scss";

const PrivacyPolicy: React.FC = () => {
    const { t } = useTranslation("global");

    const privacyPolicy = [
        {
            title: t("privacy-policy.introduction"),
            description: t("privacy-policy.des-introduction"),
        },
        {
            title: t("privacy-policy.information-we-collect"),
            description: t("privacy-policy.des-information-we-collect"),
        },
        {
            title: t("privacy-policy.use-of-information"),
            description: t("privacy-policy.des-use-of-information"),
        },
        {
            title: t("privacy-policy.data-sharing"),
            description: t("privacy-policy.des-data-sharing"),
        },
        {
            title: t("privacy-policy.data-security"),
            description: t("privacy-policy.des-data-security"),
        },
        {
            title: t("privacy-policy.your-rights"),
            description: t("privacy-policy.des-your-rights"),
        },
        {
            title: t("privacy-policy.changes-to-policy"),
            description: t("privacy-policy.des-changes-to-policy"),
        },
        {
            title: t("privacy-policy.contact-us"),
            description: t("privacy-policy.des-contact-us"),
        },
    ];

    return (
        <div className="privacy_policy__container">
            <WrapperSection>
                <div className="privacy_policy__container__wrapper">
                    <h1 className="title__v2">{t("privacy-policy.title")}</h1>
                    <hr />
                    {privacyPolicy.map((items, index) => (
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

export default PrivacyPolicy;
