const express = require('express')
const router = express.Router()

// @ Route     POST  /api/auth
// @ Desc      Login user
// @ Access    Public 
router.post('/',(req,res)=>{
      res.send('Login user')
})

// @ Route     GET  /api/auth
// @ Desc      GET USER TOKEN
// @ Access    Private 
router.get('/',(req,res)=>{
    res.send('get user login in')
})

module.exports = router
