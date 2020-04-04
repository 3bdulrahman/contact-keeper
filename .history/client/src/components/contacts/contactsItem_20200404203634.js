import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
              {name}
        </div>
    )
}
export default ContactsItem 
