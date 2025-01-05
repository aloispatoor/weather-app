import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Alert from "./components/Alert";
import {setAlert} from "./store/actions/alertActions";
import {setError} from "./store/actions/weatherActions";
import {UnknownAction} from "@reduxjs/toolkit";

function App() {
    const dispatch: AppDispatch = useDispatch<AppDispatch>();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMsg = useSelector((state: RootState) => state.alert.message);


    return (
          <div>
              <Search title="Entrer le nom d'une ville et cliquer sur Rechercher" />
              {loading ?
                  <h2>Chargement...</h2>
                  : weatherData && <Weather data={weatherData} />
              }
              {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
              {error && <Alert message={error} onClose={() => dispatch(setError() as UnknownAction)} />}
          </div>
      );
}
export default App
