var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=82aba45329a8c1c7716a6803b4e42fb3&units=metric';

module.exports = {
  getTemp : function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
        console.log(res.data.message);
      }else{
         return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
      console.log(res.data.message);
    });
  }
};

