import { useTranslation } from "react-i18next";
import { ItemProject, WrapperLayoutPresent, WrapperSection } from "~/core/components";
import fakeData from "~/core/utils/fakeData";

const Achievements: React.FC = () => {
    const { t } = useTranslation("global");

    return (
        <WrapperSection
            title={
                <h1 className="title__section">
                    {t("home.title-achivements.first")}
                    <span>{t("home.title-achivements.second")}</span>
                    {t("home.title-achivements.third")}
                </h1>
            }
        >
            <WrapperLayoutPresent type="row">
                {fakeData(3).map((_, index) => (
                    <ItemProject key={`fake-achivements-${index}`} />
                ))}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default Achievements;
