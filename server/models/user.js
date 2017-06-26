/*
 * USER MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var UserSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    note: {type: String},
}, {timestamp: true});

//register schema as model
var User = mongoose.model('User', UserSchema);