const express=require('express');
const router=express.Router();
const fs = require("fs");
const bodyParser=require('body-parser');

const {Users}=require('../models/users');


//get everything
router.get('/users', (req, res)=>
{
    Users.find({},(err,data)=>
    {
        if(!err)
        {
            res.send(data);
        }
        else{
            console.log(err);
        }
    })
});



router.get('/users/:id', (req, res)=>
{
    Users.findById(req.params.id,(err,data)=>
        {
        if(!err)
        {
            res.send(data);
        }
        else{
            console.log(err);
        }
    });
});


//edit
router.put('/users/:id', (req, res) => 
{
Users.findOneAndUpdate(req.params.id)
    .then(result => {
        message: req.body.message
       res.json('Success')
     },
      { new: true })
    
    .catch(error => console.error(error))
    });


    //deleting
router.delete('/users/:id', (req, res) => 
{
Users.findByIdAndRemove(req.params.id)
    .then(result => {
   

            res.status(200).json({code:200,message:"users Deleted succesfuly"})
       res.json('Success')
     })
    .catch(error => console.error(error))
    });

    // router.put('/stations/:id', async(req, res)=>{
    //     try{
    //        const id = req.body._id;
    //        const details= await Stations.findOneAndUpdate({id:req.body._id},   
    //         {"$set": {   
    //        name: req.body.name,
    //        idNumber:req.body.idNumber,
    //        streamlink:req.body.streamlink,
    //        favourite:req.body.favourite,
    //        image: req.body. image
    //     }} )
    
    //     if(!details){
    //        return res.status(200).send({
    //          status: 404,
    //          message: 'No data find'
    //        })
    //     }
    //     res.status(200).send({
    //        status: 200,
    //        message: 'Data Update Successfully'
    //     })
    //     }
    //     catch(error){
    //        console.log(error)
    //        return res.status(400).send({
    //          message:'Unable to update data',
    //          errors: error,
    //          status: 400
    //        })
    //     }
    //     });
module.exports=router;