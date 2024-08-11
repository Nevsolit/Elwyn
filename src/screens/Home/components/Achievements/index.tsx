import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ItemBlog, SkeletonItem, WrapperLayoutPresent, WrapperSection } from "~/core/components";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { getLatestItems } from "~/core/services";
import { ProjectsActions } from "~/core/store";
import { BlogPost } from "~/core/types";
import fakeData from "~/core/utils/fakeData";
import log from "~/core/utils/log";

const Achievements: React.FC = () => {
    const { t } = useTranslation("global");

    const [listProjects, setListProjects] = useState<BlogPost[]>([]);
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.root.projects);

    const handleGetThreeLastestProjects = useCallback(async () => {
        dispatch(ProjectsActions.update({ loading: true }));
        try {
            const projects = await getLatestItems("blogs", "timeCreated", 3);
            setListProjects(projects as BlogPost[]);
        } catch (error) {
            log("error", "handleGetThreeLastestProjects", error);
        } finally {
            dispatch(ProjectsActions.update({ loading: false }));
        }
    }, []);

    useEffect(() => {
        handleGetThreeLastestProjects();
    }, []);

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
                {loading
                    ? fakeData(3).map((_, index) => <SkeletonItem key={`skeleton-item-project-home-${index}`} />)
                    : listProjects.length > 0
                    ? listProjects.map((project, index) => (
                          <ItemBlog data={project} key={`fake-achivements-${index}`} />
                      ))
                    : null}
            </WrapperLayoutPresent>
        </WrapperSection>
    );
};

export default memo(Achievements);
