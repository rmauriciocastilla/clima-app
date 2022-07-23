import axios from 'axios';
export const GET_CITY = "GET_CITY";
export const GET_CITY_DETAIL = "GET_CITY_DETAIL";
export const DELETE_CITY = "DELETE_CITY";

const API_KEY = '4ae2636d8dfbdc3044bede63951a019b';

export const getCity = (city)=>(dispatch)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
                .then(response=>response.data)
                .then(city=>dispatch({type:GET_CITY,payload:city}))
                .catch(()=>alert("City not found"))
}

export const deleteCity = (id)=>{
    return{
        type: DELETE_CITY,
        payload: id
    }
}

export const getCityDetail = (id)=>{
    return{
        type: GET_CITY_DETAIL,
        payload: id
    }
}