const API_KEY = "00cf304a06131d3dfb70f11fd32c7eba";

export const getWeather = async (placement: {
    latitude: string,
    longitude: string
}) => {
    try {
        // Api params : lat - szerokość geograficzna, lon - długość geograficzna, units - okreśkla jednostkę temperatury, API_KEY - klucz dostępu
        const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${placement.latitude}&lon=${placement.longitude}&units=metric&appid=${API_KEY}`,
        );
        const respToExtract = await resp.json();
        return respToExtract;
    } catch (error) {
        console.log(error);
    }
};