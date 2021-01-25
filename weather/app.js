require("dotenv").config();

const fetchWeatherData = require("./lib/weather");
const writeToInfluxdb = require("./lib/influx");

const {CITY_NAME, LAT, LONG} = process.env;

( async () => {
    const weatherData = await fetchWeatherData({cityName: CITY_NAME, lat: LAT, long: LONG});
    writeToInfluxdb(weatherData)
})();