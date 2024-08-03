import { BlogPost } from "~/core/types"

export type BlogsState = {
    loading: boolean
    listBlogs: BlogPost[],
    pagination: {
        currentPage: number,
        totalPages: number,
    },
    searchTerm: string,
    sortOrder: string,
}