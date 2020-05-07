import React,{useContext} from 'react'
import ContactContext from '../../context/contact/ContactContext'
 const ContactsItem = ({contact}) => {
    const context = useContext(ContactContext)
    const { deleteContact,clearCurrent,setCurrent} = context
    const {_id,name,email,phone,type} = contact
    const deleteonClick = ()=> {
        deleteContact(_id)
        clearCurrent()
    }
    return (
        <div className="card" style={{margin:'3px'}}>
          
              <div className="card-body">
              <div className="card-title">
              <h6 className="text-info"><i className="fa fa-user"></i> {name} - <span className={'badge ' + (type==='personal'?'badge-primary':'badge-danger')}>{type}</span></h6>  
              </div>
              
              <div className="card-text">
                  <ul className="list-inline">
                      <li><i class="fas fa-fire"></i> {email&& <span className="label label-primary">{email}</span>}</li>
                      <li><i class="fas fa-phone"></i> {phone&& <span className="label label-warning">{' '+phone}</span>}</li>
                  </ul>
              </div>
              <div className="card-link"><button className="btn btn-danger btn-sm" onClick={deleteonClick}>Delete</button>{' '}
              <button className="btn btn-primary btn-sm" onClick={()=>setCurrent(contact)}>Edite</button>
               </div>
              
              </div>
        </div>
    )
}
export default ContactsItem 
