import { ThunkAction } from 'redux-thunk';
import {AppDispatch, RootState} from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async (dispatch: AppDispatch) => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${process.env.VITE_WEATHER_APP_API_KEY}`);

            if(!res.ok) {
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        }catch(err) {
            const errorMessage = err instanceof Error ? err.message : "Une erreur inconnue est entrée dans l'arêne";
            dispatch({
                type: SET_ERROR,
                payload: errorMessage,
            });
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (message: string = ''): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: message,
    }
}