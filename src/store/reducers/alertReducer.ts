import { AlertState } from "../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: AlertState = {
    message: ''
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert(
            state,
            action: PayloadAction<{ message: string }>
        ) {
            state.message = action.payload.message;
        },
    },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;