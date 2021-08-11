const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const videoRoute = require("./routes/videos")
const udemyapi = require("./routes/udemyapi")




// mongoose connection
dotenv.config();

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  },
    function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    });


    //middlewear connection
app.use(express.json());
app.use(helmet())
app.use(morgan("common"));

app.use(function (req, res, next) {
    // Website you wish to allow to connectn
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/videos", videoRoute)
app.use("/api/udemyapi", udemyapi)


//backend server
app.listen(8800, () => {
    console.log("Backend is on the capstone Server")
})