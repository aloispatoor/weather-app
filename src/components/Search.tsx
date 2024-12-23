import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setAlert} from "../store/actions/alertActions";
import {getWeather, setLoading} from "../store/actions/weatherActions";

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState();
    const changeHandler = (e: FormEvent<HTMLInputElement>)=> {
        setCity(e.currentTarget.value);
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === ""){
            return dispatch(setAlert("Il faut obligatoirement saisir une ville"));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity("");
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