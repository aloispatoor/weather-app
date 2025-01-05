import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {WeatherData, WeatherState} from '../types';

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: '',
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather(state, action: PayloadAction<WeatherData>) {
            state.data = action.payload;
            state.loading = false;
            state.error = '';
        },
        setLoading(state) {
            state.loading = true;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { getWeather, setLoading, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
