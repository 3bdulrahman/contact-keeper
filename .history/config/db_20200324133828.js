const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

//this modetho use async
const dbConnect  = async ()=>{
     mongoose.connect(db,{
        useNewUrlParse:true,
        userCreateIndex:true,
        useFindAndModify:false

     })
}

module.exports = dbConnect