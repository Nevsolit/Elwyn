import { memo } from "react";
import { ItemProject, SkeletonItem } from "~/core/components";
import EmptyData from "~/core/components/shared/EmptyData";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import fakeData from "~/core/utils/fakeData";
import "./styles.scss";
import { useTranslation } from "react-i18next";

interface ListBlogsProps {
    list: ProjectsEntity[];
    loading: boolean;
}

const ListProjects: React.FC<ListBlogsProps> = memo(({ list, loading }) => {
    const { t } = useTranslation("global");

    return (
        <div className="list__projects__container">
            <h1 className="list__projects__container__title">{t("project.post.title")}</h1>
            <div className="list__projects__container__wrapper">
                {loading ? (
                    fakeData(9).map((_, index) => <SkeletonItem key={`skeleton-item-project-${index}`} />)
                ) : list.length > 0 ? (
                    list.map((project) => <ItemProject key={project.id} data={project} />)
                ) : (
                    <EmptyData />
                )}
            </div>
        </div>
    );
});

export default memo(ListProjects);
