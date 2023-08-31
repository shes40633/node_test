var express = require('express');
var router = express.Router();
var path = require('path');




const IndexController = require('../controllers/main');
indexController = new IndexController();

router.get('/login' ,indexController.connect);
router.post('/Check' ,indexController.CheckData);
router.get('/Create' ,indexController.Create);
router.post('/CreateData' ,indexController.CreateData);
router.post('/cookie' ,indexController.rescookie);


// 測試
// router.get('/create' ,function (res ,req) {
//   
// });



module.exports = router;
