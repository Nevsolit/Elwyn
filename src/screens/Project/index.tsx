import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";

import "./styles.scss";
import { Flex } from "@radix-ui/themes";
import HeadProjects from "./components/HeadProjects";
import ListProjects from "./components/ListProjects";
import { transitionPage } from "~/core/hoc";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { useCallback, useEffect, useMemo } from "react";
import { ProjectsActions } from "~/core/store";
import { getFilteredCollection } from "~/core/services";
import { ITEMS_PER_PAGE } from "~/core/constants";
import log from "~/core/utils/log";
import { ProjectsEntity } from "~/core/types/Entity/Projects";

const ProjectScreen: React.FC = () => {
    const { t } = useTranslation("global");

    const dispatch = useAppDispatch();
    const { loading, listProjects, pagination, searchTerm, sortOrder } = useAppSelector((state) => state.root.projects);

    const fetchProjects = useCallback(async () => {
        dispatch(ProjectsActions.update({ loading: true }));
        try {
            let fetchedBlogs: ProjectsEntity[];

            // Fetch tất cả blogs
            fetchedBlogs = (await getFilteredCollection("projects", "timeCreated", ">=", "")) as ProjectsEntity[];

            // Lọc blogs theo searchTerm nếu có
            if (searchTerm) {
                const lowerSearchTerm = searchTerm.toLowerCase();
                fetchedBlogs = fetchedBlogs.filter((blog) => blog.title.toLowerCase().includes(lowerSearchTerm));
            }

            // Sắp xếp blogs
            fetchedBlogs.sort((a, b) => {
                const comparison = new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime();
                return sortOrder === "newest" ? comparison : -comparison;
            });

            dispatch(
                ProjectsActions.update({
                    listProjects: fetchedBlogs,
                    pagination: {
                        currentPage: 1,
                        totalPages: Math.ceil(fetchedBlogs.length / ITEMS_PER_PAGE),
                    },
                }),
            );
        } catch (error) {
            log("error", "Error fetching projects:", error);
        } finally {
            dispatch(ProjectsActions.update({ loading: false }));
        }
    }, [dispatch, sortOrder, searchTerm]);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    const currentProjects = useMemo(() => {
        const startIndex = (pagination.currentPage - 1) * ITEMS_PER_PAGE;

        return listProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [listProjects, pagination.currentPage]);

    const handlePageChange = useCallback(
        (page: number) => {
            dispatch(
                ProjectsActions.update({
                    pagination: {
                        ...pagination,
                        currentPage: page,
                    },
                }),
            );
        },
        [dispatch, pagination],
    );

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
                    <ListProjects
                        list={currentProjects}
                        loading={loading}
                        totalPages={pagination.totalPages}
                        currentPage={pagination.currentPage}
                        onPageChange={handlePageChange}
                    />
                </Flex>
            </WrapperSection>
        </div>
    );
};

export default transitionPage({ OgComponent: ProjectScreen });
