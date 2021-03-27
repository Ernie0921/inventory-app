const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb',schema); // creating db variable called userdb and using the schema 

module.exports = Userdb  // exportig the userdb varibale aka the database using the schema you created 