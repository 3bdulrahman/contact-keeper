import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
          
              <div className="card-body">
              {name} / <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span>
              {email&& <span className="badge badge-success">{email}</span>}
              {phone&& <span className="badge badge-warring">{phone}</span>}
              </div>
        </div>
    )
}
export default ContactsItem 
