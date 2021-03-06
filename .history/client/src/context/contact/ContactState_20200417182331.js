import React,{useReducer} from 'react'
import uuid from 'uuid/v4'
import contactContext from './ContactContext'
import { UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER} from '../type'
import contactReducer from '../contact/ContactReducer'
const ContactState = props=>{
       const contactInit = {
             contacts:[
                   {id:1,name:"ahmed",email:"xx@gmail.com",phone:"01-223-333",type:"personal"}
             ],
             current:null,
             filtered:null
       };
       const [state,dispatch] = useReducer(contactReducer,contactInit)
       //add contact 
       const addContact = contact =>{
            contact.id = uuid()
            dispatch({
                  type:ADD_CONTACT,
                  payload:contact
            })
       }
       // delete contact 
       const deleteContact = id =>{
        dispatch({
              type:DELETE_CONTACT,
              payload:id
        })
   }

   // set Current 
     const setCurrent = contact =>{
           dispatch({
                type:SET_CURRENT,
                payload:contact
           })
     }
   // clear current 
   const clearCurrent =()=> dispatch({ type:CLEAR_CURRENT})
   //update contact 
   const updateContact= contact =>{
      dispatch({
           type:UPDATE_CONTACT,
           payload:contact
      })
}
  // contact filtered 
     const contactFilter = txt =>{
             dispatch({
                    type:FILTER_CONTACTS,
                    payload:txt
             })
     }
  // contact clear filtered 
  const contactClearFiltred = ()=> dispatch({ type:CLEAR_FILTER })
       return(
            <contactContext.Provider value={{
                contacts:state.contacts,
                current:state.current,
                filtered:state.filtered,
                contactClearFiltred,
                contactFilter,
                setCurrent,
                clearCurrent,
                addContact,
                updateContact,
                deleteContact
            }}>
                {props.children}
            </contactContext.Provider>
       )   
}

export default ContactState
