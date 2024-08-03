import { memo } from "react";
import { PaginationCustom, SkeletonItem, WrapperLayoutPresent } from "~/core/components";
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
    return (
        <div className="group__column__center w-full gap-8">
            <WrapperLayoutPresent type="row">
                {loading
                    ? fakeData(9).map((_, index) => <SkeletonItem key={`skeleton-item-blog-${index}`} />)
                    : list.map((blog) => <ItemBlogs key={blog.id} data={blog} />)}
            </WrapperLayoutPresent>
            {!loading && totalPages > 1 && (
                <PaginationCustom currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
            )}
        </div>
    );
});

export default ListBlogs;
