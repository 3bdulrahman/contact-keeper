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
                  <ul className="list-inline">
                      <li><i class="fas fa-fire"></i> {email&& <span className="label label-primary">{email}</span>}</li>
                      <li><i class="fas fa-phone"></i> {phone&& <span className="label label-warning">{' '+phone}</span>}</li>
                  </ul>
              </div>
              <div className="card-link"><button className="btn btn-danger">Delete</button> </div>
              </div>
        </div>
    )
}
export default ContactsItem 
