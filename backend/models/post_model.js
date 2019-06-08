'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const PostSchema= new Schema({
    title:{type:String, default: 'Nytt fra oss i Siste Reis'},
    description:{type:String, required: true},
    images:{type: Array}
});

module.exports = mongoose.model('post', PostSchema);