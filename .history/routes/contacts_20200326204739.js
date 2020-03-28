const express = require('express')
const Contacts = require('../modles/Contacts')
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');
const router = express.Router()

// @ Route     GET  /api/contacts
// @ Desc      GET all the Contacts
// @ Access    Private 
router.get('/',auth,async(req,res)=>{
        try {
            let contacts = await Contacts.find({user:req.user.id})
            res.status(200).json({ contacts })
        } catch (error) {
             res.status(500).json({error:'Server Errors',msg:error.message})
        }
})
// @ Route     POST  /api/contacts
// @ Desc      add new Contacts
// @ Access    Private 
router.post('/',[auth,[check('name','name is required').not().isEmpty()]],async(req,res)=>{
      const error = validationResult(req)
      if(!error.isEmpty()) return res.status(400).json({error})
      const { name , email , phone , type} = req.body
      try {
           let contact = new Contacts({ user:req.user.id , name,email,phone,type})
           await contact.save()
           res.status(200).json({ msg: ' the data was saved', data: contact})
      } catch (error) {
        res.status(500).json({error:'Server Errors',msg:error.message})
      }
})
// @ Route     PUT  /api/contacts/:ID
// @ Desc      Update Contacts
// @ Access    Private 
router.put('/:id',auth,async (req,res)=>{
    // defin if there is contact with this id or not ?
    let contact = await Contacts.findOne({user:req.user.id,_id:req.params.id}) 
    if(!contact) return res.status(400).json({msg:'no contact with this id'})
    return res.json({contact})
})

// @ Route     DELETE  /api/contacts/:ID
// @ Desc      delete Contacts
// @ Access    Private 
router.delete('/:id',(req,res)=>{
    res.send('delete contact')
})


module.exports = router
