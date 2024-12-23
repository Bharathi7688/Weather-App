import React from 'react';

export const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="Forecast">
      {forecast.list.slice(0, 5).map((item, index) => (
        <div key={index} className="forecast-item">
          <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
          <p>{item.weather[0].description}</p>
          <p>Temp: {item.main.temp} °C</p>
        </div>
      ))}
    </div>
  );
};
