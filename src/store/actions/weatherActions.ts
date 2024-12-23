import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherError} from "../types";

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${process.env.WEATHER_APP_API_KEY}`);

            if(!res.ok){
                const resData: WeatherError = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherAction = await res.json();
            // @ts-ignore
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        } catch(err) {
            dispatch({
                type: SET_ERROR,
                payload: err.message
            });
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}