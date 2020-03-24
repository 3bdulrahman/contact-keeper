const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=> res.json({msg:'welcome to the world'}))

app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))





