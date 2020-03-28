const mongoose = require('mongoose')
const ContactsShema = mongoose.Schema({
         user: { type: mongoose.Schema.Types.ObjectId },
         name: { type:String , required:true},
         phone: { type:String},
         email: { type:String},
         type:{ type: String , default:'personal'}
})

module.exports = mongoose.model('contacts',ContactsShema)