const express = require('express');

const router = express.Router();  

const reelController = require('../controllers/reel_controller');

router.get('/video',reelController.video);

module.exports = router;