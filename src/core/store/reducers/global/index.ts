import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalState } from './types';


const initialState: GlobalState = {
    loading: false,
   
};

const GlobalSlice = createSlice({
    name: 'Global',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Partial<GlobalState>>) => {
            return { ...state, ...action.payload };
        },
    },
    extraReducers: () => {},
});

export const GlobalActions = GlobalSlice.actions;
const GlobalReducer = GlobalSlice.reducer;
export default GlobalReducer;
