const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractStrategy = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcryptjs');
const User = require('../models/User');
const config = require('../secrets');

//local strategy
let options = { 
    usernameField: 'email', 
    passwordField: 'passWord'
}
let localLogin = new LocalStrategy(options, async (email, passWord, done) => {
    console.log("made it here")
    try{ 
        let user = await User.findOne({email: email}); //array of objects [{}, {}]
        console.log(user)
        if(user !== null){
            //email was found, check password

            bcrypt.compare(passWord, user.passWord, (err, isMatch)=>{
                //check if error
                if(err){
                    return done(err);
                }

                //mismatch passwords
                if(!isMatch){
                    return done(null, false)
                }

                //valid user

                return done(null, user)
            })
        }
        else{
            // no email found, exit with error
            return done(null, false)
        }
    }
    catch(error){
        //can't access db
        return done(error)
    }

})


//jwt strategy 
let jwtOptions = {
    jwtFromRequest: ExtractStrategy.fromHeader('Authorization'),
    secretOrKey: config.secrets,
    passReqToCallback: true
}
let jwtLogin = new JwtStrategy(jwtOptions, async (req, payload, done) => {
    try{
        console.log(payload);
        let user = await User.findById(payload.sub)
        console.log(user)
        if(user) {
            //success
            done(null, user)
        }else {
            done(null,false)
        }

    }catch(err){
        return done(err);
    }
})

passport.use(localLogin);
passport.use(jwtLogin); 