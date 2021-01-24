require("dotenv").config();

const fetchWeatherData = require("./lib/weather");
const writeToInfluxdb = require("./lib/influx");

const {CITY_NAME} = process.env;

( async () => {
    const weatherData = await fetchWeatherData(CITY_NAME);
    await writeToInfluxdb(weatherData)
})();