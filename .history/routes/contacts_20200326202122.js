const express = require('express')
const Contacts = require('../modles/Contacts')
const auth = require('../middleware/auth')
const router = express.Router()

// @ Route     GET  /api/contacts
// @ Desc      GET all the Contacts
// @ Access    Private 
router.get('/',auth,(req,res)=>{
        try {
            let contacts = Contacts.find({user:req.user.id})
            res.status(200).json({ contacts })
        } catch (error) {
             res.status(500).json({error:'Server Errors',msg:error.message})
        }
})
// @ Route     POST  /api/contacts
// @ Desc      add new Contacts
// @ Access    Private 
router.post('/',(req,res)=>{
      res.send('add new contact')
})
// @ Route     PUT  /api/contacts/:ID
// @ Desc      Update Contacts
// @ Access    Private 
router.put('/:id',(req,res)=>{
    res.send('update contact')
})

// @ Route     DELETE  /api/contacts/:ID
// @ Desc      delete Contacts
// @ Access    Private 
router.delete('/:id',(req,res)=>{
    res.send('delete contact')
})


module.exports = router
