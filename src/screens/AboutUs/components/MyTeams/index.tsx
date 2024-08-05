import { WrapperLayoutPresent, WrapperSection } from "~/core/components";

import ItemTeam from "./components/ItemTeam";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { TeamsEntity } from "~/core/types";

type MyTeamsProps = {
    data: TeamsEntity[];
};

const MyTeams: React.FC<MyTeamsProps> = (props) => {
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
                {props?.data &&
                    props?.data.map((member, index) => <ItemTeam data={member} key={`fake-teams-${index}`} />)}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default memo(MyTeams);
