const express = require("express");
const router= express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require('../secrets');
//body-parser
router.use(express.urlencoded({extended: false})) //scrape email and password form request header
router.use(express.json())
//jwt
const jwt = require('jwt-simple');

//passport
const passport = require('passport');
require('../auth/index'); //import all of passport auth stuff

let requireLogin = passport.authenticate('local', {session: false});
let requireJwt = passport.authenticate('jwt', {session: false})
/**
 * This function returns a jwt
*/

const token = (user) => {
    let timestamp = new Date().getTime();  //current time

    return jwt.encode({sub: user.id, iat: timestamp}, config.secrets)
}

//Register
router.post("/register", async (req, res) => {
   //good times

   try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.passWord, salt);

    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        passWord: hashedPassword,

    });

    const user = await newUser.save();
    let jwtToken = token(user);
    //res.status(200).json(user)
    return res.json({token: jwtToken})
    
   } catch (err){
    res.status(500).json(err)
   }
});

router.get('/checkAuth', requireJwt, (req, res) => {
    console.log(req.user)
    res.send('success')
});

//Login 
router.post("/login", requireLogin, (req, res) => {
    // try{ 
    //     const user = await User.findOne({email: req.body.email});
    //     !user && res.status(404).send("user not found");

    //     const validPassword = await bcrypt.compare(req.body.passWord, user.passWord)
    //     !validPassword && res.status(400).json("wrong Password")
        res.json({token: token(req.user)})
        
    // } catch(err) {
    //     res.status(500).json(err)
    // }

})


module.exports = router