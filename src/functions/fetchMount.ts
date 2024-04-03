const API_KEY = "00cf304a06131d3dfb70f11fd32c7eba";

export const fetchMount = async () => {
    try {
        const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=54.10&lon=22.93&units=metric&appid=${API_KEY}`,
        );
        const extractedResp = await resp.json();
        return extractedResp;
    } catch (error) {
        console.log(error);
    }
};