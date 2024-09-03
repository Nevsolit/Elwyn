import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ButtonFilter } from "~/core/components";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { BlogsActions } from "~/core/store";

const FilterBlogs: React.FC = memo(() => {
    const [t] = useTranslation("global");

    const dispatch = useAppDispatch();
    const sortOrder = useAppSelector((state) => state.root.blogs.sortOrder);

    const handleSort = useCallback(() => {
        const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
        dispatch(BlogsActions.update({ sortOrder: newSortOrder }));
    }, [sortOrder, dispatch]);

    return (
        <ButtonFilter
            title={`Sort by ${sortOrder === "newest" ? "oldest" : "newest"}`}
            text={sortOrder === "newest" ? t("filter.newest") : t("filter.oldest")}
            onClick={handleSort}
        />
    );
});

export default FilterBlogs;
