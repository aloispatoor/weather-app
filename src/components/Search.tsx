import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getWeather, setLoading } from '../store/actions/weatherActions';
import {AppDispatch} from "../store";
import {UnknownAction} from "@reduxjs/toolkit";

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch : AppDispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            // @ts-ignore
            return dispatch(setAlert("Il faut donner un nom de ville quand même"));
        }

        dispatch(setLoading() as UnknownAction);
        dispatch(getWeather(city));
        setCity('');
    }
    return (
        <section>
            <h1>{title}</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Entrez le nom d'une ville"
                    value={city}
                    onChange={changeHandler}
                />
                <button>Rechercher</button>
            </form>
        </section>
    );
}

export default Search;