// Aplikacja używa następującego API: https://openweathermap.org/current
// oraz https://openweathermap.org/api/geocoding-api#direct

import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./App.css";
import { Placement, Weather } from "./AppTypes.js";
import { Button } from "./Components/Button.js";
import { Header } from "./Components/Header.js";
import { RenderWeather } from "./Components/RenderWeather.js";
import { SelectionMenu } from "./Components/SelectionMenu.js";
import { fetchMount } from "./Functions/fetchMount.js";
import { getPlacement } from "./Functions/getPlacement.js";
import { getWeather } from "./Functions/getWeather.js";

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
    latitude: "54.10",
    longitude: "22.93",
  });
  const [cityName, setCityName] = useState("Suwalki");

  useEffect(() => {
    fetchMount()
      .then((extractedResp) => {
        setWeatherConditions(extractedResp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getPlacement(cityName)
      .then((extractedResp) => {
        setPlacement({
          latitude: extractedResp[0].lat,
          longitude: extractedResp[0].lon,
        });
      })
      .catch((error) => {
        console.log(error);
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

  return (
    <>
      <Header />
      <br />
      <SelectionMenu
        setCityName={setCityName}
        setIsButtonClicked={setIsButtonClicked}
      />
      <br />
      <Button handleClick={handleClick} />
      {isButtonClicked === false ? (
        <p>naciśnij przycisk</p>
      ) : (
        <RenderWeather weatherConditions={weatherConditions} />
      )}
    </>
  );
}

export default App;
