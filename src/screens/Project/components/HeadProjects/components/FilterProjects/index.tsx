import { memo, useCallback } from "react";
import { ButtonFilter } from "~/core/components";
import { useAppDispatch, useAppSelector } from "~/core/hooks";
import { ProjectsActions } from "~/core/store";

const FilterProjects: React.FC = memo(() => {
    const dispatch = useAppDispatch();
    const sortOrder = useAppSelector((state) => state.root.projects.sortOrder);

    const handleSort = useCallback(() => {
        const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
        dispatch(ProjectsActions.update({ sortOrder: newSortOrder }));
    }, [sortOrder, dispatch]);

    return (
        <ButtonFilter
            title={`Sort by ${sortOrder === "newest" ? "oldest" : "newest"}`}
            text={sortOrder === "newest" ? "Newest" : "Oldest"}
            onClick={handleSort}
        />
    );
});

export default FilterProjects;
