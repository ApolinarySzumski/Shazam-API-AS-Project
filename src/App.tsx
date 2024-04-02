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
  const [cityName, setCityName] = useState("");

  // useEffect(() => {
  //   // console.log(cityName);
  //   // console.log("update");
  // }, [cityName, placement, weatherConditions]);

  useEffect(() => {
    try {
      getPlacement(cityName).then((cordinates) => {
        setPlacement({
          latitude: cordinates[0].lat,
          longitude: cordinates[0].lon,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [cityName, weatherConditions]);

  const handleSubmit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setIsButtonClicked(true);
  };

  const handleChange = async (e: BaseSyntheticEvent) => {
    setCityName(e.target.value);
    // try {
    //   await getPlacement(cityName).then((cordinates) => {
    //     setPlacement({
    //       latitude: cordinates[0].lat,
    //       longitude: cordinates[0].lon,
    //     });
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      await getWeather(placement)
        .then((extractedResp) => {
          setWeatherConditions(extractedResp);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
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
      {/* <form onSubmit={handleSubmit}> */}
      <p>Wybierz miasto</p>
      <br />
      <div>
        <select onChange={handleChange}>
          <option value="Suwalki">Suwalki</option>
          <option value="Gdansk">Gdansk</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Krakow">Krakow</option>

          {
            // w tagu option wczytaj z API lokalizacke
          }
        </select>
      </div>
      <br />

      <button onClick={handleSubmit}>Sprawdź aktualną pogodę</button>
      {isButtonClicked === false ? <p>naciśnij przycisk</p> : renderWeather()}
      {/* </form> */}
    </>
  );
}

export default App;
