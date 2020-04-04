import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
          
              <div className="card-body">
              {name} / <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span>
              <div className="card-header">
              {email&& <span className="badge badge-success">{email}</span>}
              {phone&& <span className="badge badge-waring">{phone}</span>}
              </div>
              </div>
        </div>
    )
}
export default ContactsItem 
