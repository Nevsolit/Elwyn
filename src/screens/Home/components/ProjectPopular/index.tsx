import React from "react";
import "./styles.scss";
import { WrapperSection } from "~/core/components";
import { useTranslation } from "react-i18next";
import { useProjects } from "~/core/hooks";
import Images from "~/assets/imgs";
import ItemMyProject from "./components/ItemMyProject";

const ProjectPopular: React.FC = () => {
    const { t } = useTranslation("global");

    const { projects, loading } = useProjects({ limit: 3 });

    return (
        <div
            className="project_popular__container"
            style={{
                backgroundImage: `url(${Images.bannerMyProject})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <WrapperSection title={<h1 className="introduce_title">{t("home.my-projects.title")}</h1>}>
                <div className="project_popular__container__list">
                    {loading ? (
                        <>
                            <div>1</div>
                        </>
                    ) : (
                        projects.map((project) => <ItemMyProject key={project.id} {...project} />)
                    )}
                </div>
            </WrapperSection>
        </div>
    );
};

export default ProjectPopular;
