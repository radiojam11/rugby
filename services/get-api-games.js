var axios = require('axios');
var apiAuth = require('../.env');

var config = {
  method: 'get',
  url: 'https://v1.rugby.api-sports.io/games',
  headers: {
    'x-rapidapi-key': apiAuth['x-rapidapi-key'],
    'x-rapidapi-host': 'v1.rugby.api-sports.io'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});