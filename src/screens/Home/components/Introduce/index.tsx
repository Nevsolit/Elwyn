import { useTranslation } from "react-i18next";
import { WrapperLayoutPresent, WrapperSection } from "~/core/components";

import fakeData from "~/core/utils/fakeData";
import ItemIntroduce from "./components/ItemIntroduce";

const Introduce: React.FC = () => {
    const { t } = useTranslation("global");

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
            <WrapperLayoutPresent type="row">
                {fakeData(3).map((_, index) => (
                    <ItemIntroduce key={`fake-introduce-${index}`} />
                ))}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default Introduce;
