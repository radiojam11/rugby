var express = require('express');
var router = express.Router();
var axios = require('axios');
var data = new Date();
var oggi=`${data.getFullYear()}-11-${data.getDate()}`;
const apiKey = require('../.env');

var config = {
  method: 'get',
  url: `https://v1.rugby.api-sports.io/games?date=${oggi}`,
  //url: `https://v1.rugby.api-sports.io/games?date=2022-11-18`,
  headers: {
    'x-rapidapi-key':apiKey.apiKey,
    'x-rapidapi-host': 'v1.rugby.api-sports.io'
  }
};

// *******registro su file*******
const fs = require('fs')

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  axios(config)
  .then(function (response) {
    //salvo il json ricevuto su  file sul disco
    //storeData(response.data, 'ilMioFile.json');
    res.render('index', { title: 'Rugby Challenge', data: JSON.stringify(response.data) });
  })
  .catch(function (error) {
    console.log(error);
  });
  //res.render('index', { title: 'Rugby Challenge', data: JSON.stringify(response.data) });
});

module.exports = router;
