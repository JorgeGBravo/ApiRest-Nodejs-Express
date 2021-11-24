var express = require('express');
var router = express.Router();
const prueba = require("../bin/controllers/prueba");

/* GET home page. */

router.get('/', function(req, res, next) {
  res.json({'msg' :'respond with a resource'});
});

router.get('/prueba', prueba.hola);

module.exports = router;
