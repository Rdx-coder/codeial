
const express = require('express');

const router =express.Router();

const homeController =require('../controllers/home_controller');




console.log('router loaded');

router.get('/',homeController.home);

router.use('/users',require('./users'));


router.use('/reel', require('./reel'));

//for any further routes , access from here
//router.use('/routername ',require('./routerfile')); 

module.exports = router;

