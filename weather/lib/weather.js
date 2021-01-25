const got = require("got");

const { OW_API_KEY } = process.env;
const OW_UNITS = process.env.OW_UNITS || "metric";

async function fetchWeatherData(weatherQuery) {
  const weatherData = await fetchWeatherJson(weatherQuery);

  return { temp: weatherData.main.temp };
}

async function fetchWeatherJson(weatherQuery) {
  try {
    return await got(generateURLForQuery(weatherQuery)).json();
  } catch (e) {
    console.log(e);
    throw Error("failed to fetch weather data", e);
  }
}

function generateURLForQuery(weatherQuery) {
  const { cityName, lat, long } = weatherQuery;
  if (lat && long) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${OW_UNITS}&APPID=${OW_API_KEY}`;
  } else {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${OW_UNITS}&APPID=${OW_API_KEY}`;
  }
}

module.exports = fetchWeatherData;
