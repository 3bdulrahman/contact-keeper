import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
          
              <div className="card-body">
              <div className="card-title">
              <h2>{name}</h2> / <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span>
              </div>
              
              {email&& <span className="badge badge-success">{email}</span>}
              {phone&& <span className="badge badge-warning">{phone}</span>}
        
              </div>
        </div>
    )
}
export default ContactsItem 
