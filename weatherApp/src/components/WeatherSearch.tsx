import React, { useEffect, useState } from 'react'
import WeatherDetail from './WeatherDetail';



interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

const WeatherSearch = () => {

  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<WeatherData | null>(null);
  const [message, setMessage] = useState<string>("");

  const apiKey = "fe1190964f085678fbe81299c4bd466b";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const getData = async () => {
    if (!city.trim()) {
      setMessage("Please enter city name");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const result = await response.json();

      if (result.cod === 200) {
        setData(result);
        setCity("")
        setMessage("found");
      } else {
        setData(null);
        setCity("")
        setMessage("City not found");
      }
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong");
    }
  };

   const getWeatherByLocation = async (
    lat: number,
    lon: number
  ) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      const result = await response.json();

      setData(result);
      setMessage("Current location weather");
    } catch (error) {
      console.log(error);
      setMessage("Unable to fetch weather");
    }
  };
   const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          getWeatherByLocation(lat, lon)
        },
        (error) => {
          console.log(error);
          setMessage("Location permission denied");
        }
      );
    } else {
      setMessage("Geolocation not supported");
    }
  };
  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <>
    <div className='w-100 bg-white flex justify-between gap-3 px-3 py-2 rounded-xl'>
      <input type="text" value={city} onChange={handleChange} placeholder='search your city'className='w-full border-none outline-none'/>
      <button className='px-2 py-1 bg-blue-600 text-white rounded-lg active:scale-90' onClick={getData}>Search</button>
    </div>
    {
       <WeatherDetail data={data} message={message}/>
    }
    </>

  )
}

export default WeatherSearch
