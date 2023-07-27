import React from "react";
import axios from 'axios';
import "./App.css";

export default function Weather() {
    return (
        <div className="html">
    <h1>Todays Weather</h1>
    <div className="search">
      <form className="searchbutton" id="search-form">
        <input
          id="city-input"
          type="text"
          placeholder="Enter a place"
          autocomplete="off"
          autofocus="on" />
        <input className="submitbutton" type="submit" value="Search" />
      </form>
      <h2>Date</h2>
      <h3 id="city">Type in your location!</h3>
      <div cclassName="container">
        <div className="box">
          <div className="column">
            <div className="col-6" id="first">
              Today it is:<br />
              <p id="description">Description</p>
            <span id="unitsCelsius"><h5 id="temperature-number">5</h5>°C</span>       
            </div>
            <div className="col-6" id="second">
              <li>Humidity: <span id="humidity"></span>%</li>
              <li>Wind: <span id="wind"></span> km/h</li>
            </div>
          </div>
        </div>
        <img className="today-weather-icon" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Clear" id="icon" />
        <div classNames="Week" id="forecast"></div>
      </div>
    <h6>
    <a href="https://github.com/BrookeClarke/Weather-App" target="_blank"> Open source code </a> by Brooke Clarke</h6>
                <p id="temperature-description"></p>
            </div>
            </div>
    )
}