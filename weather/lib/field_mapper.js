const fields = require("../fields.json");
const _ = require("lodash");

function getOpenWeatherFieldPathsIndexedByKey() {
  return _.mapValues(fields, "openweather_field_path");
}

function getInfluxFieldNames() {
  return Object.keys(fields);
}

module.exports = { getOpenWeatherFieldPathsIndexedByKey, getInfluxFieldNames };
