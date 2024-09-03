import { Flex } from "@radix-ui/themes";
import { useTranslation } from "react-i18next";
import { WrapperSection } from "~/core/components";
import { transitionPage } from "~/core/hoc";
import HeadBlogs from "./components/HeadBlogs";
import ListBlogs from "./components/ListBlogs";

import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { BlogsActions } from "~/core/store";
import { BlogPost } from "~/core/types";
import log from "~/core/utils/log";
import "./styles.scss";
import { ITEMS_PER_PAGE } from "~/core/constants";
import { getFilteredCollection } from "~/core/services";
import PopularBlogs from "./components/PopularBlogs";

const BlogsScreen = () => {
    const { t } = useTranslation("global");

    const dispatch = useAppDispatch();
    const { loading, listBlogs, pagination, searchTerm, sortOrder } = useAppSelector((state) => state.root.blogs);

    const fetchBlogs = useCallback(async () => {
        dispatch(BlogsActions.update({ loading: true }));
        try {
            let fetchedBlogs: BlogPost[];

            // Fetch tất cả blogs
            fetchedBlogs = (await getFilteredCollection("blogs", "timeCreated", ">=", "")) as BlogPost[];

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
                BlogsActions.update({
                    listBlogs: fetchedBlogs,
                    pagination: {
                        currentPage: 1,
                        totalPages: Math.ceil(fetchedBlogs.length / ITEMS_PER_PAGE),
                    },
                }),
            );
        } catch (error) {
            log("error", "Error fetching blogs:", error);
        } finally {
            dispatch(BlogsActions.update({ loading: false }));
        }
    }, [dispatch, sortOrder, searchTerm]);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    const currentBlogs = useMemo(() => {
        const startIndex = (pagination.currentPage - 1) * ITEMS_PER_PAGE;
        return listBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [listBlogs, pagination.currentPage]);

    const handlePageChange = useCallback(
        (page: number) => {
            dispatch(
                BlogsActions.update({
                    pagination: {
                        ...pagination,
                        currentPage: page,
                    },
                }),
            );
        },
        [dispatch, pagination],
    );

    const blogsStatusPopularLatest = listBlogs.filter((blog) => blog.status === "popular");
    const latestPopularBlog =
        blogsStatusPopularLatest.length > 0 ? blogsStatusPopularLatest[blogsStatusPopularLatest.length - 1] : null;

    const blogsStatusTrending = listBlogs.filter((blog) => blog.status === "trending");

    const showPopularBlogs = searchTerm === "";

    return (
        <div className="blogs__container">
            <WrapperSection
                title={
                    <div className="title__section-v2">
                        <h1>{t("blogs.title")}</h1>
                        <p>{t("blogs.description")}</p>
                    </div>
                }
            >
                <Flex direction={"column"} gap={"8"} className="w-full">
                    <HeadBlogs />
                    {showPopularBlogs && latestPopularBlog && (
                        <PopularBlogs dataPopular={latestPopularBlog} dataTrending={blogsStatusTrending} />
                    )}
                    <ListBlogs
                        list={currentBlogs}
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

export default transitionPage({ OgComponent: BlogsScreen });
