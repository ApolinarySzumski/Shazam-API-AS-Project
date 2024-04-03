// Aplikacja używa następującego API: https://openweathermap.org/current
// oraz https://openweathermap.org/api/geocoding-api#direct

import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./App.css";
import { getPlacement } from "./functions/getPlacement.js";
import { getWeather } from "./functions/getWeather.js";

// const API_KEY = "00cf304a06131d3dfb70f11fd32c7eba";

type Weather = {
  name: string;
  main: {
    temp: number;
    pressure: number;
  };
};

type Placement = {
  latitude: string;
  longitude: string;
};

function App() {
  const [weatherConditions, setWeatherConditions] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      pressure: 0,
    },
  });
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [placement, setPlacement] = useState<Placement>({
    latitude: "",
    longitude: "",
  });
  const [cityName, setCityName] = useState("Suwalki");

  useEffect(() => {
    getPlacement(cityName).then((cordinates) => {
      setPlacement({
        latitude: cordinates[0].lat,
        longitude: cordinates[0].lon,
      });
    });
  }, [cityName, weatherConditions]);

  useEffect(() => {
    getWeather(placement)
      .then((extractedResp) => {
        setWeatherConditions(extractedResp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [placement]);

  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    setCityName(e.target.value);
    setIsButtonClicked(false);
  };

  const renderWeather = () => {
    return (
      <div>
        <p>{weatherConditions.name}</p>
        <br />
        <p>Aktualna Temperatura: {weatherConditions.main.temp}</p>
        <br />
        <p>Ciśnienie: {weatherConditions.main.pressure}hPa</p>
        <br />
      </div>
    );
  };

  return (
    <>
      <p>Wybierz miasto</p>
      <br />
      <div>
        <select onChange={handleChange}>
          <option value="Suwalki">Suwałki</option>
          <option value="Gdansk">Gdańsk</option>
          <option value="Warsaw">Warszawa</option>
          <option value="Krakow">Kraków</option>
        </select>
      </div>
      <br />
      <button onClick={handleClick}>Sprawdź aktualną pogodę</button>
      {isButtonClicked === false ? <p>naciśnij przycisk</p> : renderWeather()}
    </>
  );
}

export default App;
