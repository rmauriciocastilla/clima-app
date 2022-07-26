import React from "react";
import './City.css';
import { useDispatch } from "react-redux";
import { deleteCity } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function City({id,name,temp,idImg}){

    const dispatch = useDispatch();
    
    return(
        <div id={id} className="container-city">
            <button className="button" onClick={()=>dispatch(deleteCity(id))}>X</button>
            <Link className="Link" to={`/${id}`}>
                <h3>{name}</h3>
                <img src={`http://openweathermap.org/img/wn/${idImg}@2x.png`}/>
                <h3>{temp} °C</h3>
            </Link>
        </div>
    )
}
