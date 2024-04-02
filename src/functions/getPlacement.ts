const API_KEY = "00cf304a06131d3dfb70f11fd32c7eba";

export const getPlacement = async (cityName: string) => {
  try {
    const resp = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},616&limit=1&appid=${API_KEY}`,
    );
    const respToExtract = await resp.json();
    return respToExtract;
  } catch (error) {
    console.log(error);
  }
};
