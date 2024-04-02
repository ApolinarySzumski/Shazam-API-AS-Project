// Aplikacja używa następującego API: https://openweathermap.org/current

import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "00cf304a06131d3dfb70f11fd32c7eba";
const latSuwalki = 54.11;
const lonSuwalki = 22.93;

type Weather = {
  name: string;
  main: {
    temp: number;
    pressure: number;
  };
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

  const getWeather = async () => {
    try {
      // Api params : lat - szerokość geograficzna, lon - długość geograficzna, units - okreśkla jednostkę temperatury, API_KEY - klucz dostępu
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latSuwalki}&lon=${lonSuwalki}&units=metric&appid=${API_KEY}`,
      );
      console.log(resp);
      const respToExtract = await resp.json();
      return respToExtract;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather()
      .then((extractedResp) => {
        setWeatherConditions(extractedResp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = () => {
    setIsButtonClicked(false);
    console.log(weatherConditions);
    setIsButtonClicked(true);
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
      {/* <form onSubmit={handleSubmit}>
        <label>
          Type song name
          <input
            type="text"
            placeholder="Enter song name"
            value={inputValue}
            onChange={handleChange}
          />
        </label> */}
      <button onClick={handleClick}>Sprawdź aktualną pogodę</button>
      {isButtonClicked === false ? <p>naciśnij przycisk</p> : renderWeather()}
      {/* </form> */}
    </>
  );
}

export default App;
