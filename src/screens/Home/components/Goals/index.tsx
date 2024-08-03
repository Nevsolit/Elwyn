import { useTranslation } from "react-i18next";
import { WrapperLayoutPresent, WrapperSection } from "~/core/components";
import fakeData from "~/core/utils/fakeData";
import ItemGoals from "./components/ItemGoals";

const Goals: React.FC = () => {
    const [t] = useTranslation("global");

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
            <WrapperLayoutPresent type="long-short">
                {fakeData(2).map((_, index) => (
                    <ItemGoals key={`item-goals-${index}`} className={`${index % 2 ? "md:flex-1" : "md:flex-[2]"}`} />
                ))}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default Goals;
