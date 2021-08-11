const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    // userId: {
    //     type:String,
       
    // },
    description : {
        type:String,
        max: 500
    },
    img:{
        type: String
    },
    videoLink:{
        type: String
    },
    ratings: {
        type: Array,
        default: []
    },
    
},

   
{timestamps: true} 
);
module.exports = mongoose.model("Video", VideoSchema)