﻿const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Imagens = new Schema({
 
    nome:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    }
  
})
module.exports = mongoose.model("imagens", Imagens)