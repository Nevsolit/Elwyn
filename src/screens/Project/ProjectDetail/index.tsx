import { BackPage, Loading, WrapperSection } from "~/core/components";
import { transitionPage } from "~/core/hoc";

import "./styles.scss";
import { Flex } from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { ProjectsActions } from "~/core/store";
import { getDetailCollection } from "~/core/services";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import { useCallback, useEffect, useState } from "react";
import log from "~/core/utils/log";
import { formatTime } from "~/core/utils";

const ProjectDetailScreen: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const [projectDetail, setProjectDetail] = useState<ProjectsEntity | null>(null);

    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.root.projects);

    const handleGetBlogDetail = useCallback(async () => {
        dispatch(ProjectsActions.update({ loading: true }));
        try {
            if (projectId) {
                const blogDetail = await getDetailCollection("projects", projectId);

                if (blogDetail) {
                    setProjectDetail(blogDetail as ProjectsEntity);
                }
            }
        } catch (error) {
            log("error", error);
        } finally {
            dispatch(ProjectsActions.update({ loading: false }));
        }
    }, [dispatch, projectId]);

    useEffect(() => {
        handleGetBlogDetail();
    }, []);

    return (
        <div className="project_detail__container">
            {loading && <Loading />}
            <WrapperSection type="detail">
                <BackPage type="detail" />
                <Flex direction={"column"} gap={"8"} align={"center"}>
                    <div className="project_detail__container__title group__column__center">
                        <p>{formatTime(projectDetail?.timeCreated || "")}</p>
                        <h1>{projectDetail?.title}</h1>
                        <span>{projectDetail?.description}</span>
                    </div>
                    {projectDetail?.sections.map((sectionProject, index) => {
                        let checkImage = sectionProject.images.length === 1;
                        return (
                            // <Flex key={`content-project-${index}`} direction={"column"} gap={"8"} align={"center"}>
                            <div className="w-full flex flex-col gap-6">
                                <div className={` ${checkImage ? "wrapper_item_image" : "wrapper_list_item_image"}`}>
                                    {sectionProject.images.map((image, index) => (
                                        <img
                                            key={`item-section-image-project-${index}`}
                                            className={!checkImage ? "rounded-xl" : "project_detail__container__image"}
                                            src={image.url}
                                            alt="elwyn"
                                        />
                                    ))}
                                </div>

                                {sectionProject.contents.map((content, index) => (
                                    <p
                                        key={`item-section-content-project-${index}`}
                                        className="project_detail__container__text"
                                    >
                                        {content}
                                    </p>
                                ))}
                            </div>
                            // </Flex>
                        );
                    })}
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectDetailScreen });
