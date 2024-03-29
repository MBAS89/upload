const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name:{type:String, required:true, unique:true},
    img:{type:String, required:true}

},{timestamps : true})

const User = mongoose.model('User', UserSchema)

module.exports = User