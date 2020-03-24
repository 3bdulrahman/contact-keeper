const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const dbConnect  = ()=>{
     mongoose.connect({
        useNewUrlParse:true,
        userCreateIndex:true,
        useFindAndModify:false

     })
}

module.exports = dbConnect