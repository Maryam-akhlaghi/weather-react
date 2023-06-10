import React, { useState } from "react";
import axios from "axios";
import "./App.css"
export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [icon, setIcon] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState(null);
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(apiUrl).then(setResult);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function setResult(response) {
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (temp != null)
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
        <ul>
          <li>city name : {city} </li>
          <li> temperature : {temp}°C</li>
          <li> description : {description} </li>
          <li> humidity : {humidity}% </li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  else
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          ></input>
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
}
