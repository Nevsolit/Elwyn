import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ABoutUsState } from './types';


const initialState: ABoutUsState = {
    loading: false,
};

const AboutUsSlice = createSlice({
    name: 'AboutUs',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Partial<ABoutUsState>>) => {
            return { ...state, ...action.payload };
        },
    },
    extraReducers: () => {},
});

export const AboutUsActions = AboutUsSlice.actions;
const AboutUsReducer = AboutUsSlice.reducer;
export default AboutUsReducer;
