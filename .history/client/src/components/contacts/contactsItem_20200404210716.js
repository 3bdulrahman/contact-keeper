import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
          
              <div className="card-body">
              <div className="card-title">
              <h6>{name} - <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span></h6>  
              </div>
              
              <div className="card-text">
              {email&& <span className="label label-primary">{email}</span>} -- 
              {phone&& <span className="label label-warning">{' '+phone}</span>}
              </div>
        
              </div>
        </div>
    )
}
export default ContactsItem 
