const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../modles/User')
const configSecret = require('config')
const { check, validationResult } = require('express-validator');


// @ Route     GET  /api/auth
// @ Desc      GET USER TOKEN
// @ Access    Private 
router.get('/',(req,res)=>{
    res.send('get user login in')
})
// @ Route    Post /api/auth
// @ desc     login to app 
// @ access   public
router.post('/',[
        check('email','enter the valid email syntax error').isEmail(),
        check('password','passwoord is required').exists()
],async(req,res)=>{
       const errors = validationResult(req)
       if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()})
       const {email,password} = req.body
       try {
             let user = await User.findOne({email})
             if(!user) return res.status(400).json({msg: ' the email you are enter invalid'})
             const isMatch = await bcrypt.compare(password,user.password)
             if(!isMatch) return res.status(400).json({msg:'incorrect password'})
             const payload = { user:{ id: user.id} }
             await jwt.sign(payload,configSecret.get('secretKey'),{expiresIn:36000},(err,token)=>{
               if(err) throw err
               res.status(200).json({token:token})     
             })

       } catch (error) {
             res.status(500).json({ msg: error.message})
       }
})

module.exports = router
