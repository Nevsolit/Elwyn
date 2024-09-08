import { memo } from "react";
import { useTranslation } from "react-i18next";
import { PaginationCustom, SkeletonItem, WrapperLayoutPresent } from "~/core/components";
import EmptyData from "~/core/components/shared/EmptyData";
import ItemBlogs from "~/core/components/shared/ItemBlog";
import { BlogPost } from "~/core/types";
import fakeData from "~/core/utils/fakeData";

interface ListBlogsProps {
    list: BlogPost[];
    loading: boolean;
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ListBlogs: React.FC<ListBlogsProps> = memo(({ list, loading, totalPages, currentPage, onPageChange }) => {
    const [t] = useTranslation("global");

    return (
        <div className="group__column__center w-full gap-4">
            <div className="w-full flex justify-start">
                <h1 className="text-xl font-bold font-nunito ">{t("blogs.list-blog")}</h1>
            </div>
            {loading ? (
                <WrapperLayoutPresent colums={2} type="row" gap={12}>
                    {fakeData(9).map((_, index) => (
                        <SkeletonItem key={`skeleton-item-blog-${index}`} />
                    ))}
                </WrapperLayoutPresent>
            ) : list.length > 0 ? (
                <WrapperLayoutPresent colums={2} type="row" gap={12}>
                    {list.map((blog) => (
                        <ItemBlogs key={blog.id} data={blog} />
                    ))}
                </WrapperLayoutPresent>
            ) : (
                <EmptyData />
            )}
            {!loading && totalPages > 1 && (
                <PaginationCustom currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            )}
        </div>
    );
});

export default ListBlogs;
