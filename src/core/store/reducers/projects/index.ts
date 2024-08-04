import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectsState } from './types';


const initialState: ProjectsState = {
    loading: false,
    listProjects: [],
    pagination: {
        currentPage: 1,
        totalPages: 1,
    },
    searchTerm: '',
    sortOrder: 'newest',
};

const ProjectsSlice = createSlice({
    name: 'Projects',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Partial<ProjectsState>>) => {
            return { ...state, ...action.payload };
        },
    },
    extraReducers: () => {},
});

export const ProjectsActions = ProjectsSlice.actions;
const ProjectsReducer = ProjectsSlice.reducer;
export default ProjectsReducer;
