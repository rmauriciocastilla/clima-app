import { GET_CITY,DELETE_CITY, GET_CITY_DETAIL } from "../actions"

const initialState = {
    cities: [],
    cityDetail:{},
}

export default function rootReducer(state=initialState,action){
    switch(action.type){
        
        case GET_CITY:
            if(state.cities.find(city=>city.id===action.payload.id)){
                return{...state}
            }
            return {
                ...state,
                cities: [action.payload].concat(state.cities)
            }

        case DELETE_CITY:
            return{
                ...state,
                cities: state.cities.filter(city=>city.id!==action.payload)
            }

        case GET_CITY_DETAIL:
            return{
                ...state,
                cityDetail: state.cities.find(city=>city.id==action.payload)
            }
        default:
            return {...state}
    }
}