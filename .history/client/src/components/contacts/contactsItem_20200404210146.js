import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
          
              <div className="card-body">
              <div className="card-title">
              <h4>{name}</h4> / <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span>
              </div>
              
              {email&& <span className="label label-success">{email}</span>}
              {phone&& <span className="label label-warning">{phone}</span>}
        
              </div>
        </div>
    )
}
export default ContactsItem 
