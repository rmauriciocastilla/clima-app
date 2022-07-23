import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCityDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import './CityDetail.css';

export default function CityDetail({match}){
    
    const dispatch = useDispatch();
    let cityDetail = useSelector(state=>state.cityDetail);

    useEffect(()=>{
        dispatch(getCityDetail(match.params.id))
    },[])
    return(
        <div>
            {
                !cityDetail.main?"":
            <div className="container-detail">
                <Link className="button-paginacion" to="/">Back</Link>
                <div className="flex-center">
                    <h1 className="detail-title">{cityDetail.name}, {cityDetail.sys.country}</h1>
                    <img src={`http://openweathermap.org/img/wn/${cityDetail.weather[0].icon}@2x.png`}/>
                </div>

                <div className="container-details-city">
                    <div>
                        <h2>Temperature</h2>
                        <p>Actual temperature: {cityDetail.main.temp} °C</p>
                        <p>Maximum temperature: {cityDetail.main.temp_max} °C</p>
                        <p>Minimun temperature: {cityDetail.main.temp_min} °C</p>
                        <p>Thermal sensation: {cityDetail.main.feels_like} °C</p>
                    </div>
                    <div>
                        <h2>Weather</h2>
                        <p>Group of weather: {cityDetail.weather[0].main}</p>
                        <p>Description: {cityDetail.weather[0].description}</p>
                        <p>Cloudiness: {cityDetail.clouds.all} %</p>
                        <p>Pressure: {cityDetail.main.pressure} hPa</p>
                        <p>Humidity: {cityDetail.main.humidity} %</p>
                    </div>
                    <div>
                        <h2>Wind</h2>
                        <p>Speed: {cityDetail.wind.speed} meter/sec</p>
                        <p>Direction: {cityDetail.wind.deg} degrees</p>
                    </div>
                    <div>
                        <h2>City geo location</h2>
                        <p>Latitude: {cityDetail.coord.lat}</p>
                        <p>Longitude: {cityDetail.coord.lat}</p>
                    </div>
                </div>
            </div>
            }
            
        </div>
    )
}