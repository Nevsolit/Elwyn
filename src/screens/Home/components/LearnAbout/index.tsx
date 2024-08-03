import { WrapperLayoutPresent, WrapperSection } from "~/core/components";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import fakeData from "~/core/utils/fakeData";
import ItemLearnAbout from "./components/ItemLearnAbout";

const LearnAbout: React.FC = () => {
    const { t } = useTranslation("global");

    return (
        <WrapperSection
            title={
                <h1 className="title__section">
                    {t("home.title-learn-about.first")} <span>{t("home.title-learn-about.second")}</span>
                </h1>
            }
        >
            <WrapperLayoutPresent type="row">
                {fakeData(4).map((_, index) => {
                    if (index === 1) {
                        return (
                            <div key={`fake-learn-about-${index}`} className={`learn__about__group_item `}>
                                <ItemLearnAbout key={`fake-learn-about-${index}`} type="small" />
                                <ItemLearnAbout key={`fake-learn-about-${index + 1}`} type="small" />
                            </div>
                        );
                    }
                    if (index === 2) {
                        return null; // Skip rendering item at index 2 as it is included in the previous div
                    }
                    return <ItemLearnAbout key={`fake-learn-about-${index}`} />;
                })}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default LearnAbout;
