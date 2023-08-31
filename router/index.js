var express = require('express');
var router = express.Router();
var path = require('path');



const IndexController = require('../controllers/main');
indexController = new IndexController();

router.get('/' ,indexController.index);








module.exports = router;


