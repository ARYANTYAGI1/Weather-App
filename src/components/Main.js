import "./style.css";
import {useEffect, useState} from 'react';
export const Main=()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Meerut");
     useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=14b87ccff748ed6a364cfe3ae1e6ae86`
            const response=await fetch(url);
            // console.log(response);
            const resJson=await response.json();
            setCity(resJson.main);

        }



        fetchApi();
     },[search])

    return(<>
    <div class="twelve">
  <h1>Weather App</h1>
  <br />
</div>
        <div className='box'>
            <div className="inputData">
                <input 
                type="serach"
                value={search}
                className="inputField"
                
                onChange={(event)=>{
                    setSearch(event.target.value)

                }}/>

            </div>
{
    !city ? (
        <p className="errorMsg">No City Found</p>
    ):( <div>
<div className='info'>
            <h2 className="location">
            <i className="fa-solid fa-cloud"></i>{search}
            </h2>
            <h1 className='temp'>{city.temp}°cel

            </h1>
            <h3 className="tempmin_max">Min:{city.temp_min} | Max:{city.temp_max} </h3>


        </div>

        <div className="wave_one"></div>
        <div className="wave_two"></div>
        <div className="wave_three"></div>
        </div>
    )
}
        
        
        </div>
        </>)
}