import { memo } from "react";
import { ItemProject, PaginationCustom, SkeletonItem } from "~/core/components";
import EmptyData from "~/core/components/shared/EmptyData";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import fakeData from "~/core/utils/fakeData";
import "./styles.scss";

interface ListBlogsProps {
    list: ProjectsEntity[];
    loading: boolean;
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const ListProjects: React.FC<ListBlogsProps> = memo(({ list, loading, totalPages, currentPage, onPageChange }) => {
    return (
        <div className="list__projects__container">
            <h1 className="list__projects__container__title">Dự án của tôi</h1>
            <div className="list__projects__container__wrapper">
                {loading ? (
                    fakeData(9).map((_, index) => <SkeletonItem key={`skeleton-item-project-${index}`} />)
                ) : list.length > 0 ? (
                    list.map((project) => <ItemProject key={project.id} data={project} />)
                ) : (
                    <EmptyData />
                )}
                {!loading && totalPages > 1 && (
                    <PaginationCustom currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                )}
            </div>
        </div>
    );
});

export default memo(ListProjects);
