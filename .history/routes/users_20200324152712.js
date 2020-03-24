const express = require('express')
const router = express.Router()

// @ Route     POST  /api/users
// @ Desc      Rigester the users
// @ Access    Public 
router.post('/',(req,res)=>{
      
      res.send(req.body)
})

module.exports = router
