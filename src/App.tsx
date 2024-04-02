// Aplikacja używa następującego API: https://openweathermap.org/current
// oraz https://openweathermap.org/api/geocoding-api#direct

import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./App.css";

const API_KEY = "00cf304a06131d3dfb70f11fd32c7eba";
// const latSuwalki = 54.11;
// const lonSuwalki = 22.93;
// const cityName = "Gdansk";

// type Weather = {
//   name: string;
//   main: {
//     temp: number;
//     pressure: number;
//   };
// };

function App() {
  // const [weatherConditions, setWeatherConditions] = useState<Weather>({
  //   name: "",
  //   main: {
  //     temp: 0,
  //     pressure: 0,
  //   },
  // });
  //  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [placement, setPlacement] = useState({});
  const [cityName, setCityName] = useState("");

  // const getPlacement = async () => {
  //   try {
  //     const initialResp = await fetch(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},616&limit=1&appid=${API_KEY}`,
  //     );
  //     const initialRespToExtract = await initialResp.json();
  //     return initialRespToExtract;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getWeather = async () => {
  //   try {
  //     // Api params : lat - szerokość geograficzna, lon - długość geograficzna, units - okreśkla jednostkę temperatury, API_KEY - klucz dostępu
  //     const finalResp = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${placement.latitude}&lon=${placement.longitude}&units=metric&appid=${API_KEY}`,
  //     );
  //     const finalRespToExtract = await finalResp.json();
  //     return finalRespToExtract;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getData = async () => {
  //   await getPlacement().then((cordinates) => {
  //     setPlacement({
  //       latitude: cordinates[0].lat,
  //       longitude: cordinates[0].lon,
  //     });
  //   });
  //   await getWeather()
  //     .then((extractedResp) => {
  //       setWeatherConditions(extractedResp);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    const getPlacement = async () => {
      try {
        const initialResp = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},616&limit=1&appid=${API_KEY}`,
        );
        const initialRespToExtract = await initialResp.json();
        return initialRespToExtract;
      } catch (error) {
        console.log(error);
      }
    };
    getPlacement().then((cordinates) => {
      setPlacement({
        latitude: cordinates[0].lat,
        longitude: cordinates[0].lon,
      });
    });
  }, [cityName]);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(placement);
    // setIsButtonClicked(false);
    // console.log(weatherConditions);
    // setIsButtonClicked(true);
  };

  const handleChange = (e: BaseSyntheticEvent) => {
    setCityName(e.target.value);
  };

  // const renderWeather = () => {
  //   return (
  //     <div>
  //       <p>{weatherConditions.name}</p>
  //       <br />
  //       <p>Aktualna Temperatura: {weatherConditions.main.temp}</p>
  //       <br />
  //       <p>Ciśnienie: {weatherConditions.main.pressure}hPa</p>
  //       <br />
  //     </div>
  //   );
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Wybierz miasto
          <select onChange={handleChange}>
            <option value=""></option>
            <option value="Gdansk">Gdansk</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Krakow">Krakow</option>
            <option value="Gdansk">Suwalki</option>
            {
              // w tagu option wczytaj z API lokalizacke
            }
          </select>
        </label>
        <button type="submit">Sprawdź aktualną pogodę</button>
        {/* {isButtonClicked === false ? <p>naciśnij przycisk</p> : renderWeather()} */}
      </form>
    </>
  );
}

export default App;
