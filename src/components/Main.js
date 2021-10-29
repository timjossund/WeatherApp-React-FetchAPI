import React, { useState } from 'react';

export const Main = () => {

    const [weather, setWeather] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myKey}`).then(response => response.json()
        ).then(data => setWeather(data))
    }


    return (
        <div className="mainDiv">
            <input 
                className="input" 
                placeholder="enter your city..."
                onChange={e => setCity(e.target.value)}
                value={city}
            >
            </input>
            <button className="submitBtn" onClick={getWeather}>Submit</button>
            {typeof weather.main === 'undefined' ? (
                <div>
                    <h3>Enter a city!</h3>
                </div>
            ) : (
            <div className="display">
                <h1>City: {weather.name}</h1>
                <p>Temp: {weather.main.temp}</p>
                <p>Real Feel: {weather.main.feels_like}</p>
                <p>Conditions: {weather.weather[0].main}</p>
                <p>Description: {weather.weather[0].description}</p>
            </div>
            )}
        </div>
    )
}
