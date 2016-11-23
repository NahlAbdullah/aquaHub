var express = require('express');
var router = express.Router();
var dbTestController=require('../controller/dbTestController');
var aquaController=require('../controller/aquaController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AquaHub' });
});
router.get('/insertProduct',dbTestController.insertProduct)
router.get('/findProduct',dbTestController.findProduct)
router.get('/addCompany',dbTestController.addCompany)
router.get('/addProduct',dbTestController.addProduct);
router.get('/addProfile',dbTestController.addProfile);
router.get('/findProducts',dbTestController.findProducts);
router.get('/neighborhood',dbTestController.neighborhood);
router.get('/restaurants',dbTestController.restaurants);
router.get('/location',dbTestController.location);

router.get('/search',aquaController.search)
router.get('/book',aquaController.book)

module.exports = router;
