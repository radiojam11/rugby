var express = require('express');
var router = express.Router();
var axios = require('axios');
var data = new Date();
var oggi=`${data.getFullYear()}-11-${data.getDate()}`;
const apiKey = require('../.env');

var config = {
  method: 'get',
  url: `https://v1.rugby.api-sports.io/games?date=${oggi}`,
  headers: {
    'x-rapidapi-key':apiKey.apiKey,
    'x-rapidapi-host': 'v1.rugby.api-sports.io'
  }
};


/* GET home page. */
router.get('/', function(req, res, next) {
  /* 
  // TODO spostrare la funzione in service
  axios(config)
  .then(function (response) {
    res.render('index', { title: 'Rugby Challenge', data: JSON.stringify(response.data) });
  })
  .catch(function (error) {
    console.log(error);
  });
   */
  res.render(
    'index', 
    { 
      title: 'Rugby Challenge',
      data: {
        parameters:{date:"2019-11-11"},
        results: 2,
        response: [
          {
            id:22, 
            date: "2018-11-13 12:30",
            week: "Quarter-finals",
            country:{
              id:26,
              name: "World"
            },
            teams:{
              home:{
                id: 132,
                name: "Monaco 7s",
                logo: "https://media.api-sports.io/rugby/teams/132.png"
              },
              away:{
                id: 130,
                name: "La Rochelle 7s",
                logo: "https://media.api-sports.io/rugby/teams/130.png",
                flag: null
              }
            }  
          },
          {
            id:23, 
            date: "2018-11-14 12:30",
            week: "null",
            country:{
              id:9,
              name: "Germany",
              flag: "https://media.api-sports.io/flags/de.svg"
            },
            teams:{
              home:{
                id: 165,
                name: "RK 03 Berlin",
                logo: "https://media.api-sports.io/rugby/teams/165.png"
              },
              away:{
                id: 160,
                name: "Leipzig",
                logo: "https://media.api-sports.io/rugby/teams/160.png"
              }
            }  
          }
        ]
      }
    }
  );
}
);

module.exports = router;
