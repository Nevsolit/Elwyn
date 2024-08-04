import { memo } from "react";
import { ItemProject, PaginationCustom, SkeletonItem, WrapperLayoutPresent } from "~/core/components";
import EmptyData from "~/core/components/shared/EmptyData";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import fakeData from "~/core/utils/fakeData";

interface ListBlogsProps {
    list: ProjectsEntity[];
    loading: boolean;
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ListProjects: React.FC<ListBlogsProps> = memo(({ list, loading, totalPages, currentPage, onPageChange }) => {
    return (
        <div className="group__column__center w-full gap-8">
            {loading ? (
                <WrapperLayoutPresent type="row">
                    {fakeData(9).map((_, index) => (
                        <SkeletonItem key={`skeleton-item-project-${index}`} />
                    ))}
                </WrapperLayoutPresent>
            ) : list.length > 0 ? (
                <WrapperLayoutPresent type="row">
                    {list.map((project) => (
                        <ItemProject key={project.id} data={project} />
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

export default memo(ListProjects);
