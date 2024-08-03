import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";

import "./styles.scss";
import { Flex } from "@radix-ui/themes";
import HeadProjects from "./components/HeadProjects";
import ListProjects from "./components/ListProjects";
import { transitionPage } from "~/core/hoc";

const ProjectScreen: React.FC = () => {
    const { t } = useTranslation("global");

    return (
        <div className="projects__container">
            <WrapperSection
                title={
                    <div className="title__section-v2">
                        <h1>{t("projects.title")}</h1>
                        <p>{t("projects.description")}</p>
                    </div>
                }
            >
                <Flex direction={"column"} gap={"8"} className="w-full">
                    <HeadProjects />
                    <ListProjects />
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectScreen });
