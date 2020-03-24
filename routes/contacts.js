const express = require('express')
const router = express.Router()

// @ Route     GET  /api/contacts
// @ Desc      GET all the Contacts
// @ Access    Private 
router.get('/',(req,res)=>{
    res.send('get all the contacts')
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
