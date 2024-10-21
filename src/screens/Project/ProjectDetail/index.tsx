import { Loading, WrapperSection } from "~/core/components";
import { transitionPage } from "~/core/hoc";

import "./styles.scss";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { ProjectsActions } from "~/core/store";
import { getDetailCollection } from "~/core/services";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import { useCallback, useEffect, useState } from "react";
import log from "~/core/utils/log";

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
            <WrapperSection>
                <div className="project_detail__container__wrapper">
                    <img
                        className="project_detail__container__wrapper__banner"
                        src={projectDetail?.sections[0]?.images[0]?.url}
                        alt={projectDetail?.sections[0]?.images[0]?.uid}
                    />
                    <div className="project_detail__container__wrapper__content">
                        <h1>{projectDetail?.title}</h1>
                        <div className="project_detail__container__wrapper__content__info">
                            <div>
                                <span>Thời gian</span>
                                <p>{projectDetail?.timeLine || ""}</p>
                            </div>
                            <div>
                                <span>NỀN TẢNG</span>
                                <p>{projectDetail?.platform || ""}</p>
                            </div>
                            <div>
                                <span>VAI TRÒ CỦA TÔI</span>
                                <p>{projectDetail?.myRole || ""}</p>
                            </div>
                        </div>
                        <div className="project_detail__container__wrapper__content__introduce">
                            <h2>Giới thiệu</h2>
                            <p>{projectDetail?.description}</p>
                        </div>
                        <div className="project_detail__container__wrapper__content__introduce">
                            <h2>Vai trò của tôi</h2>
                            <p>{projectDetail?.introduceRole}</p>
                        </div>
                        <div className="project_detail__container__wrapper__content__introduce">
                            <h2>Vấn đề</h2>
                            <p>{projectDetail?.problem}</p>
                        </div>
                        <div className="project_detail__container__wrapper__content__sections">
                            {projectDetail?.sections.map((section, index) => {
                                if (index === 0) return null;

                                return (
                                    <div
                                        key={`section-${index}`}
                                        className="project_detail__container__wrapper__content__sections__items"
                                    >
                                        {section?.images.map((image, index) => (
                                            <img key={`image-${index}`} src={image.url} alt={image.uid} />
                                        ))}
                                        <div className="project_detail__container__wrapper__content__sections__items__content">
                                            {section?.contents.map((content, index) => {
                                                let checkIndex = index === 0;
                                                return (
                                                    <p
                                                        key={`content-${index}`}
                                                        className={checkIndex ? "text-first" : ""}
                                                    >
                                                        {content}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectDetailScreen });
