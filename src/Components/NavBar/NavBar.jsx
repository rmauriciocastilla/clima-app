import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { getCity } from "../../redux/actions";
import './NavBar.css';

export default function NavBar(){

    const [cityForm, setCityForm] = useState("");
    const dispatch = useDispatch();

    function handleChange(e){
        e.preventDefault();
        setCityForm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!cityForm.trim()){
            console.log("Estoy vacio")
        }else{
            dispatch(getCity(cityForm.trim()))
            setCityForm("");
        }
    }

    return(
        <div className="container-navbar">
            <h1 className="navbar-title">Weather App</h1>
            <form onSubmit={handleSubmit}>
                <input id="input-text" type="text" placeholder="Name city..." value={cityForm} onChange={handleChange} autoComplete="off"/>
                <input id="input-button" type="submit" value="Search"/>
            </form>
        </div>
    )
}