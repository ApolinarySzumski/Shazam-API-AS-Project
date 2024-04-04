import { Weather } from "../AppTypes";

type RenderWeather = {
  weatherConditions: Weather;
};

export const RenderWeather = (props: RenderWeather) => {
  const { weatherConditions } = props;
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
