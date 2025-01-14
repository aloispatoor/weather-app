import weatherReducer from './reducers/weatherReducer';
import alertReducer from './reducers/alertReducer';
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        alert: alertReducer,
        weather: weatherReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;