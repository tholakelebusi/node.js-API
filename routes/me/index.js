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



router.post('/user', (req, res)=>
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




module.exports=router;