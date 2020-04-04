import React from 'react'

 const ContactsItem = ({contact}) => {
    const {id,name,email,phone,type} = contact
    return (
        <div className="card" style={{margin:'3px'}}>
          
              <div className="card-body">
              <div className="card-title">
              <i className="fa fa-user"></i><h6>{name} - <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span></h6>  
              </div>
              
              <div className="card-text">
                  <ul className="list-inline">
                      <li><i class="fas fa-fire"></i> {email&& <span className="label label-primary">{email}</span>}</li>
                      <li><i class="fas fa-phone"></i> {phone&& <span className="label label-warning">{' '+phone}</span>}</li>
                  </ul>
              </div>
              <div className="card-link"><button className="btn btn-danger btn-sm">Delete</button>{' '}
              <button className="btn btn-primary btn-sm">Edite</button>
               </div>
              
              </div>
        </div>
    )
}
export default ContactsItem 
