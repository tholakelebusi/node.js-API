const mongoose = require('mongoose');




const Users=mongoose.model('Users',{

    title:
    { type:String,
    required:true
    },
   surname:
   {type:String,
   required:true
   },
    email:{type:String,
        required:true}
}
   
);
 
module.exports = {Users};