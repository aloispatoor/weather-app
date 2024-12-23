import { combineReducers } from 'redux';
import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    weather: weatherReducer,
    alert: alertReducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;