import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
          
              <div className="card-body">
              {name} / <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span>
              </div>
        </div>
    )
}
export default ContactsItem 
