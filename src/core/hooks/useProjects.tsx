import { useState, useEffect, useMemo } from "react";
import { getFilteredCollection } from "~/core/services";
import { ProjectsEntity } from "~/core/types/Entity/Projects";
import log from "~/core/utils/log";

interface UseProjectsOptions {
    limit?: number;
    sortOrder?: "asc" | "desc";
    enabled?: boolean;
}

interface UseProjectsReturn {
    projects: ProjectsEntity[];
    loading: boolean;
    error: Error | null;
    refetch: () => Promise<void>;
}

const useProjects = ({ limit, sortOrder = "desc", enabled = true }: UseProjectsOptions = {}): UseProjectsReturn => {
    const [projects, setProjects] = useState<ProjectsEntity[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchProjects = async () => {
        if (!enabled) return;

        setLoading(true);
        setError(null);

        try {
            // Fetch all projects
            const fetchedProjects = (await getFilteredCollection(
                "projects",
                "timeCreated",
                ">=",
                "",
            )) as ProjectsEntity[];

            // Sort projects by timeCreated
            const sortedProjects = [...fetchedProjects].sort((a, b) => {
                const comparison = new Date(b.timeCreated).getTime() - new Date(a.timeCreated).getTime();
                return sortOrder === "desc" ? comparison : -comparison;
            });

            setProjects(sortedProjects);
        } catch (err) {
            const error = err instanceof Error ? err : new Error("Failed to fetch projects");
            log("error", "Error fetching projects:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [enabled, sortOrder]);

    // Apply limit if specified
    const limitedProjects = useMemo(() => {
        if (!limit) return projects;
        return projects.slice(0, limit);
    }, [projects, limit]);

    return {
        projects: limitedProjects,
        loading,
        error,
        refetch: fetchProjects,
    };
};

export default useProjects;

// // Lấy tất cả projects
// const { projects, loading } = useProjects();

// // Lấy 5 projects mới nhất
// const { projects, loading } = useProjects({ limit: 5 });

// // Lấy 10 projects cũ nhất
// const { projects, loading } = useProjects({
//     limit: 10,
//     sortOrder: 'asc'
// });

// // Disable fetch tạm thời
// const { projects, loading } = useProjects({
//     enabled: false
// });

// // Với refetch capability
// const { projects, loading, refetch } = useProjects();
// // Sau đó có thể gọi refetch() khi cần
