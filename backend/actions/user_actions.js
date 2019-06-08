var express = require('express');
var router = express.Router();
var userscheme = require('../models/user_model');
const bcrypt = require('bcrypt');
var saltRounds = 15;


    router.post('/loginUser',function(req,res){
        userscheme.findOne({username:req.body.username}).then(function(result){
          if(result == null){
            return res.send({success:false,message:'wrong email'});
        }else{
          bcrypt.compare(req.body.password, result.password, function(err, responseset) {
            if(responseset){
              return res.send({success: true, message:'logged in', username:req.body.username});
            }else{
              return res.send({success:false, message: 'wrong password'});
            }
          })}
    })
  });

    router.post('/createUser', function(req,res){
       userscheme.findOne({username:req.body.username}).then(function(result){
        if(result !== null){
            return res.send({success: false, message: 'A user with this email alreaddy exists'});
          }else{
            const {password, username} = req.body;
            bcrypt.hash(password, saltRounds, function(err, hash) {
              // Store hash in your password DB.
              const newuser = new userscheme({
                username:name,
                password:hash

                
              })  

              newuser.save();

            });
            res.send({success: true, message: 'Welcome to the app'});
        }
    })
    
});
    


module.exports = router;