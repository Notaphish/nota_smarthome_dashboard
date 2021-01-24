const {InfluxDB, FieldType, } = require("influx");

const {DB_HOST, DB_NAME} = process.env;

const influx = new InfluxDB({
    host: DB_HOST,
    database: DB_NAME,
    schema: [{
        measurement: "weather_data",
        fields: {
            temp: FieldType.FLOAT
        },
        tags: []
    }]
});


/**
 * @param weatherData json blob of weather data
 */
async function writeToInfluxdb (weatherData){
    await influx.writePoints([{measurement: "weather_data", fields: {temp: weatherData.temp}}]);
    console.log("Wrote weather data to influxdb")
}

module.exports = writeToInfluxdb;

