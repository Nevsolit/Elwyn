import { WrapperLayoutPresent, WrapperSection } from "~/core/components";
import fakeData from "~/core/utils/fakeData";

import ItemTeam from "./components/ItemTeam";
import { useTranslation } from "react-i18next";

const MyTeams: React.FC = () => {
    const { t } = useTranslation("global");

    return (
        <WrapperSection
            title={
                <div className="title__section-v2">
                    <h1>{t("about-us.my-teams.title")}</h1>
                    <p>{t("about-us.my-teams.description")}</p>
                </div>
            }
        >
            <WrapperLayoutPresent type="row">
                {fakeData(3).map((_, index) => (
                    <ItemTeam key={`fake-teams-${index}`} />
                ))}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default MyTeams;
