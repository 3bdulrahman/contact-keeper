const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

//this modetho use async
const dbConnect  = async ()=>{
      try {
        await  mongoose.connect(db,{
            useNewUrlParse:true,
            userCreateIndex:true,
            useFindAndModify:false
         })
         console.log('the database run ok')
      } catch (error) {
            console.error(error.message)
            process.exit(1)
      }
}

module.exports = dbConnect