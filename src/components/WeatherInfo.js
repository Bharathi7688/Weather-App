import React from 'react';

export const Weatherinfo = ({ weather }) => {
  if (!weather) return <p>Enter a city to view weather information.</p>;

  return (
    <div className="weatherinfo">
      <h2>{weather.name}  <p>( {weather.weather[0].description} )</p></h2>
      <div className='weatherinfo-items'>
      <p>Temperature: <span>{weather.main.temp}</span>°C</p>
      <p>Humidity: <span>{weather.main.humidity}</span>%</p>
      <p>Wind Speed:<span>{weather.wind.speed}</span>m/s</p>
    </div>
    </div>
  );
};

