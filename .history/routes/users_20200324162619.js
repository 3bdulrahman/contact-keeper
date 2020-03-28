const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../modles/User')
const { check, validationResult } = require('express-validator');
// @ Route     POST  /api/users
// @ Desc      Rigester the users
// @ Access    Public 
router.post('/',[
      check('name','the name is required').not().isEmpty(),
      check('email','invalid email ops').isEmail(),
      check('password','password at laste 6 char..').isLength({min:6})
],async(req,res)=>{
          const errors = validationResult(req)
          if(!errors.isEmpty()){
               return res.status(400).json({errors:errors.array()})
          }
          const {name,email,password} = req.body
          try {
              let user = User.findOne({email})
              if(user){ return res.status(400).json({msg:'email already exist '}) }
              user = new User({ name,email,password })
              const salt = await bcrypt.genSalt(10)
              user.password =await bcrypt.hash(password,salt)
              await user.save()
              res.send('saved')

          } catch (error) {
              console.error(error.message)
          }
})

module.exports = router
