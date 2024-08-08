import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";
import "./styles.scss";

const TermsOfUse: React.FC = () => {
    const { t } = useTranslation("global");

    const terms = [
        {
            title: t("terms-of-use.introduction"),
            description: t("terms-of-use.des-introduction"),
        },
        {
            title: t("terms-of-use.services"),
            description: t("terms-of-use.des-services"),
        },
        {
            title: t("terms-of-use.user-responsibilities"),
            description: t("terms-of-use.des-user-responsibilities"),
        },
        {
            title: t("terms-of-use.intellectual-property"),
            description: t("terms-of-use.des-intellectual-property"),
        },
        {
            title: t("terms-of-use.limitation-of-liability"),
            description: t("terms-of-use.des-limitation-of-liability"),
        },
        {
            title: t("terms-of-use.changes-to-terms"),
            description: t("terms-of-use.des-changes-to-terms"),
        },
        {
            title: t("terms-of-use.governing-law"),
            description: t("terms-of-use.des-governing-law"),
        },
    ];

    return (
        <div className="terms_of_use__container">
            <WrapperSection>
                <div className="terms_of_use__container__wrapper">
                    <h1 className="title__v2">{t("terms-of-use.title")}</h1>
                    <hr />
                    {terms.map((term, index) => (
                        <div key={index} className="box__content__v2">
                            <h2>{term.title}</h2>
                            <p>{term.description}</p>
                        </div>
                    ))}
                </div>
            </WrapperSection>
        </div>
    );
};

export default TermsOfUse;
