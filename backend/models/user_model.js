'use strict';
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const UserSchema = new Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
});

module.exports = mongoose.model('user', UserSchema);