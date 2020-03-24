const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
// @ Route     POST  /api/users
// @ Desc      Rigester the users
// @ Access    Public 
router.post('/',[
      check('name','the name is required').not().isEmpty(),
      check('email','invalid email ops').isEmail(),
      check('password','password at laste 6 char..').isLength({min:6})
],(req,res)=>{
          const errors = validationResult(req)
          if(!errors.isEmpty()){
               return res.status(400).json({errors:errors.array()})
          }
          res.send('success !! ')
})

module.exports = router
