import { memo } from "react";
import { PaginationCustom, WrapperLayoutPresent } from "~/core/components";
import ItemBlogs from "~/core/components/shared/ItemBlog";
import fakeData from "~/core/utils/fakeData";

const ListBlogs = memo(() => {
    return (
        <div className="group__column__center w-full gap-8">
            <WrapperLayoutPresent type="row">
                {fakeData(10).map((_, index) => (
                    <ItemBlogs key={`item-blog-${index}`} />
                ))}
            </WrapperLayoutPresent>
            <PaginationCustom currentPage={1} totalPages={20} onPageChange={(page) => console.log(page)} />
        </div>
    );
});

export default ListBlogs;
