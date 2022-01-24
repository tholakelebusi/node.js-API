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



router.post('/users', (req, res)=>
{
    const user=new Users(
        {
            name:req.body.name,
            surname:req.body.surname,
            email:req.body.email
        }
    );
    user.save((err,data)=>
    {
        res.status(200).json({code:200,message:"users added succesfuly",addUsers:data})
    });
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

module.exports=router;