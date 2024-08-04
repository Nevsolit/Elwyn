export type ProjectsState = {
    loading: boolean
    listProjects: any[],
    pagination: {
        currentPage: number,
        totalPages: number,
    },
    searchTerm: string,
    sortOrder: string,
}