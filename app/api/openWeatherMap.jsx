var axios = require('axios');

const API_KEY = 'a9674159cd66214d7e0bb447a2d23cdc';
const UNITS = 'metric';
const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=${UNITS}`;

module.exports = {
  getTemp: function functionName(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${BASE_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {      
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to fetch weather for that location');
    });
  }
}
