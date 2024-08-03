import { Filter } from "lucide-react";
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { BlogsActions } from "~/core/store";

const FilterBlogs: React.FC = memo(() => {
    const dispatch = useAppDispatch();
    const sortOrder = useAppSelector((state) => state.root.blogs.sortOrder);

    const handleSort = useCallback(() => {
        const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
        dispatch(BlogsActions.update({ sortOrder: newSortOrder }));
    }, [sortOrder, dispatch]);

    return (
        <button
            className="btn__default gap-2 flex-center"
            onClick={handleSort}
            title={`Sort by ${sortOrder === "newest" ? "oldest" : "newest"}`}
        >
            <Filter size={24} />
            <span>{sortOrder === "newest" ? "Newest" : "Oldest"}</span>
        </button>
    );
});

export default FilterBlogs;
