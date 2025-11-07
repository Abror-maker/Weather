import React, { useEffect, useState } from 'react'
import './Weather.css'
const Weather = () => {
    const [city, setCity] = useState("Andijan")
    const key ="afe35e4730aedc23885188af62e80d58"
    const manzil =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
    const[api,setApi] =useState([])

        useEffect(()=>{
            fetch(manzil)
            .then(javob=>javob.json())
            .then(malumot=>setApi(malumot))
        },[city])

            console.log(api);
            

  return (
    <div className='Weather'>
      {
        api&&(
            <div className="main">
                <input onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Shaxarni kiriting!'/>
                <h1>City:{api.name}</h1>
                <h1>Havo Harorati:{api.main&&api.main.temp}</h1>
                <h1>Osmon:{api.weather&&api.weather[0].main}</h1>
            </div>
        )
      }
    </div>
  )
}

export default Weather
