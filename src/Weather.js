import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(" ");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4eb6daa3756f86904454c49ea5eab81e";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <form onSubmit={handleSubmit} id="search-form" className="mb-3">
                <div className="row search">
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-6">
                        <input
                          type="city"
                          className="form-control"
                          placeholder="Enter a city"
                          onChange={updateCity}
                          autofocus="0n"
                          autocomplete="off"
                          id="city-input"
                        />
                      </div>
                      <div className="col-3">
                        <input
                          type="submit"
                          value="search"
                          className="btn btn-primary"
                        />
                      </div>
                      <div className="col-3">
                        <button className="currently-btn btn btn-success w-100">
                          Current
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
