const express = require('express');
const session = require('express-session')

const router = express.Router();  

const passport = require('passport');

const usersController = require('../controllers/users_controller');



router.get('/profile', passport.checkAuthentication ,usersController.profile);

router.get('/post',usersController.post);

router.get('/sign-up',usersController.signUp)

router.get('/sign-in',usersController.signIn)

router.post('/create',usersController.create)
//use passport as a middileware to authenticate
router.post('/create-session',passport.authenticate('local',{failureRedirect : '/users/sign-in'},
    ), usersController.createSession);

router.get('/sign-out',usersController.destroyeSession);

module.exports = router;