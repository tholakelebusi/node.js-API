const mongoose = require('mongoose');




const Stations=mongoose.model('Station',{

    name:
    { type:String,
    required:true
    },
    idNumber:
    { type:Number,
    required:true
    },
   streamlink:
   {type:String,
   required:true
   },
    image:{type:String,
        required:true},
        favourite:
        {
            type:Boolean,
            required:true
        }
}
   
);
 
module.exports = {Stations};