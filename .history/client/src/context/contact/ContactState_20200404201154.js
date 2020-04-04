import React,{useReducer} from 'react'
import uuid from 'uuid'
import contactContext from './ContactContext'
import { UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER} from '../type'
import contactReducer from '../contact/ContactReducer'
const ContactState = props=>{
       const contactInit = {
             contacts:[
                   {id:1,name:"ahmed",email:"xx@gmail.com",phone:"020202",type:"peronal"},
                   {id:2,name:"Sami",email:"samxx@gmail.com",phone:"058882",type:"prof"}
             ]
       };
       const [state,dispatch] = useReducer(contactReducer,contactInit)
       //add contact 
       return(
            <contactContext.Provider value={{
                contacts:state.contacts
            }}>
                {props.children}
            </contactContext.Provider>
       )   
}

export default ContactState
