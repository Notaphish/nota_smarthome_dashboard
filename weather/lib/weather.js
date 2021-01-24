const got = require("got");

const { OW_API_KEY } = process.env;
const OW_UNITS = process.env.OW_UNITS || "metric";

async function fetchWeatherData(cityName) {

    const weatherData = await fetchWeatherJson(cityName);

  return { temp: weatherData.main.temp };
}

async function fetchWeatherJson(cityName){
    try {
        return await got(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${OW_UNITS}&APPID=${OW_API_KEY}`
        ).json();
      } catch (e) {
        console.log(e);
        throw Error("failed to fetch weather data", e);
      }
    
}

module.exports = fetchWeatherData;