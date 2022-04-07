const express=require('express');
const router=express.Router();
const fs = require("fs");
const bodyParser=require('body-parser');
const {Stations}=require('../models/station');
const { resourceLimits } = require('worker_threads');

const multerConfig = require("../uploads/upload");


//get everything
router.get('/stations', (req, res)=>
{
    Stations.find({},(err,data)=>
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



router.post('/stations', (req, res)=>
{
    const user=new  Stations(
        {
            name:req.body.name,
            streamlink:req.body.streamlink,
            image:req.body.image,
            idNumber:req.body.idNumber
        }
    );
    user.save((err,data)=>
    {
        res.status(200).json({code:200,message:"users added succesfuly",addUsers:data})
    });
});

router.get('/stations/:id', (req, res)=>
{
    Stations.findById(req.params.id,(err,data)=>
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

//search
router.get('/stations/next/:idNumber', (req, res)=>
{
    Stations.find({idNumber:req.params.idNumber},(err,data)=>
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
router.put('/stations/:id', async(req, res)=>{
        try{
           const id = req.body._id;
           const details= await Stations.findOneAndUpdate({id:req.body._id},   
            {"$set": {   
           favourite:req.body.favourite
        }} )
    
        if(!details){
           return res.status(200).send({
             status: 404,
             message: 'No data find'
           })
        }
        res.status(200).send({
           status: 200,
           message: 'Data Update Successfully'
        })
        }
        catch(error){
           console.log(error)
           return res.status(400).send({
             message:'Unable to update data',
             errors: error,
             status: 400
           })
        }
        });



    //deleting
router.delete('/stations/:id', (req, res) => 
{
    Stations.findByIdAndRemove(req.params.id)
    .then(result => {
   

            res.status(200).json({code:200,message:"users Deleted succesfuly"})
       res.json('Success')
     })
    .catch(error => console.error(error))
    });

    //search by name
    router.get('/stations/names/:name', (req, res)=>
{
    Stations.find({name:req.params.name},(err,data)=>
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


router.post('/test', multerConfig.saveToUploads, (req, res) => {
    return res.json("file uploaded successfully");
});







module.exports=router;