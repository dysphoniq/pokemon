var express = require('express');
var router = express.Router();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

/* GET home page. */
router.get('/', function(req, res, next) {
  P.getPokemonByName('eevee')
    .then(function (response) {
      res.render('index', {title: 'Pokemans', pokemon: JSON.stringify(response)});
    })
    .catch(function (error) {
      console.log('error: ' + error);
      res.status(404).send('whoops');
    });
});

module.exports = router;
