const { InfluxDB, FieldType } = require("influx");
const { getInfluxFieldNames } = require("./field_mapper");

const { DB_HOST, DB_NAME } = process.env;

const influx = new InfluxDB({
  host: DB_HOST,
  database: DB_NAME,
  schema: [
    {
      measurement: "weather_data",
      fields: getFieldSchema(),
      tags: [],
    },
  ],
});

function getFieldSchema() {
  return getInfluxFieldNames()
    .map((influxFieldName) => ({ [influxFieldName]: FieldType.FLOAT }))
    .reduce(
      (acc, influx_schema_item) => ({ ...acc, ...influx_schema_item }),
      {}
    );
}

/**
 * @param weatherData json blob of weather data
 */
async function writeToInfluxdb(weatherData) {
  const pointToSave = {
    measurement: "weather_data",
    fields: { ...weatherData },
  };
  console.log(
    `Writing the following to influxdb: [ ${JSON.stringify(pointToSave)} ]`
  );
  await influx.writePoints([pointToSave]);
  console.log("Wrote weather data to influxdb");
}

module.exports = writeToInfluxdb;
