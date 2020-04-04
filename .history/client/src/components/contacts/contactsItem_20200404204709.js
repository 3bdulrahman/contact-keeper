import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card">
              <div className="card-header">{name}</div>
              <div className="card-body">
                  type : <span className={'badge '+(type==='personal'?'badge-success':'badge-danger')}>{type}</span>
              </div>
        </div>
    )
}
export default ContactsItem 
