import React, {FC} from "react";
import {WeatherData} from "../store/types";

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
    const farenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
    const celsius = (data.main.temp - 273.15).toFixed(2);
    return (
    <section>
        <h1>{data.name} - {data.sys.country}</h1>
        <ul className="level">
            <li className="level-item">
                <p>{data.weather[0].description}</p>
                <p>
                    <img src={`https://api.openweathermap.org/img/wm/${data.weather[0].icon}.png`} alt=""/>
                </p>
            </li>
            <li className="level-item">
                <p>Température</p>
                <p>{data.main.temp}</p>
                <p>{celsius} <sup>&#8451;</sup></p>
                <p>{farenheit} <sup>&#8457;</sup></p>
            </li>
            <li className="level-item">
                <p>Humidité</p>
                <p>{data.main.humidity}</p>
            </li><li className="level-item">
                <p>Pression atmosphérique</p>
                <p>{data.main.pressure}</p>
            </li><li className="level-item">
                <p>Vent</p>
                <p>{data.wind.speed} m/s</p>
            </li>
        </ul>
    </section>
    );
};

export default Weather;

