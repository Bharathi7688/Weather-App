import React, {useState} from 'react';
import axios from 'axios';
import { Searchbar } from './components/Searchbar';
import { Weatherinfo } from './components/WeatherInfo';
import { Forecast } from './components/Forecast';
import './App.css'


function App ()  {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  
  const fetchWeatherData = async (city) => {
    const apiKey = `87ccc611f223af5bf212ce65e329ed9b`;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl),
      ]);

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Weather App</h1>
     <Searchbar onSearch={fetchWeatherData} />
     <Weatherinfo weather={weather} />
     <Forecast forecast={forecast} />
    </div>
  );
}


export default App;