import React, {useState, useEffect} from 'react';
import City from '../City/City';
import Paginacion from '../Paginacion/Paginacion';
import { useSelector } from 'react-redux/es/exports';
import './Cities.css';

export default function Cities(){
    let cities = useSelector(state=>state.cities)
    const [maximo,setMaximo] = useState(0);
    const [pagina,setPagina] = useState(1);
    const [porPagina,setPorPagina] = useState(8);

    useEffect(()=>{
        setMaximo(Math.ceil(cities.length/8));
        setPagina(1);
    },[cities])
    
    return(
        <div>
            {!cities.length?"":<Paginacion
                pagina={pagina}
                setPagina={setPagina}
                maximo={maximo}
            />}
            <div className='container-cities'>
                {!cities.length?"":cities.slice((pagina-1)*porPagina,(pagina-1)*porPagina+porPagina).map(city=>(
                    <City
                    key={city.id}
                    id={city.id}
                    name={city.name}
                    temp={city.main.temp}
                    temp_min={city.main.temp_min}
                    temp_max={city.main.temp_max}
                    idImg={city.weather[0].icon}
                    />
                    ))}
            </div>
        </div>
    )
}