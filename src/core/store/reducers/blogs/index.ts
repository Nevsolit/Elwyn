import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BlogsState } from './types';


const initialState: BlogsState = {
    loading: false,
    listBlogs: [],
    pagination: {
        currentPage: 1,
        totalPages: 1,
    },
    searchTerm: '',
    sortOrder: 'newest',
};

const BlogsSlice = createSlice({
    name: 'Blogs',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Partial<BlogsState>>) => {
            return { ...state, ...action.payload };
        },
    },
    extraReducers: () => {},
});

export const BlogsActions = BlogsSlice.actions;
const BlogsReducer = BlogsSlice.reducer;
export default BlogsReducer;
