var express = require('express');
var router = express.Router();
var postscheme = require('../models/post_model');
var multer = require('multer');
const upload = multer({dest:'uploads/'});



router.post('/upload', upload.array('file'),function (req, res, next) {
  //looping the uploaded file paths. Store to db
  var temp = [];
  for(var i=0; i < req.files.length; i++){
    temp.push(req.files[i].path);
  }
  var newpost = new postscheme({
    title:req.body.title,
    description:req.body.description,
    images:temp
  })
  console.log(newpost);
  newpost.save();
})


router.get('/getAllPosts', function(req,res){
    postscheme.find({} , (req, Posts) => {
      let newobj = {};
      let postArray = [];
      Posts.map(posts => {
        newobj = {
          id:posts._id,
          title:posts.title,
          description: posts.description,
          images: posts.images
        }
        postArray.push(newobj);
      })
      res.send(postArray);
    })
    
})

module.exports = router;