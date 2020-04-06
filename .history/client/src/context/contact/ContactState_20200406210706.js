import React,{useReducer} from 'react'
import uuid from 'uuid'
import contactContext from './ContactContext'
import { UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER} from '../type'
import contactReducer from '../contact/ContactReducer'
const ContactState = props=>{
       const contactInit = {
             contacts:[
                   {id:1,name:"ahmed",email:"xx@gmail.com",phone:"01-223-333",type:"personal"},
                   {id:2,name:"Sami",email:"sam404@gmail.com",phone:"22-123-122",type:"prof"},
                   {id:3,name:"Jenas",email:"jenas@outlook.sa",phone:"76-666-222",type:"prof"}
             ]
       };
       const [state,dispatch] = useReducer(contactReducer,contactInit)
       //add contact 
       const addContact = contact =>{
            contact.id = uuid.v4()
            dispatch({
                  type:ADD_CONTACT,
                  payload:contact
            })
       }
       return(
            <contactContext.Provider value={{
                contacts:state.contacts,
                addContact
            }}>
                {props.children}
            </contactContext.Provider>
       )   
}

export default ContactState
