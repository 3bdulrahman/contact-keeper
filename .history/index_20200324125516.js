const express = require('express')
const app = express()

// to run use : npm run server this call the script to run server with nodemon

// define the routes 

app.use('/api/users',require('./routes/users'))
app.use('/api/contacts',require('./routes/contacts'))
app.use('/api/auth',require('./routes/auth'))

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=> res.json({msg:'welcome to the world'}))

app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))





