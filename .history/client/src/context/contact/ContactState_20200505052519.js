import React,{useReducer} from 'react'
import axios from 'axios'
import contactContext from './ContactContext'
import {GET_CONTACT,CLEAR_CONTACT,ERROR_CONTACT, UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER} from '../type'
import contactReducer from '../contact/ContactReducer'
const ContactState = props=>{
       const contactInit = {
             contacts:null,
             current:null,
             filtered:null,
             error:null
       };
       const [state,dispatch] = useReducer(contactReducer,contactInit)
       //get contact 
       const getContact =async () =>{
            
            try {
                 const res =  await axios.get('/api/contacts')
                 dispatch({
                        type:GET_CONTACT,
                        payload:res.data
                 })
                 console.log(res)
            } catch (error) {
                  dispatch({
                        type:ERROR_CONTACT,
                        payload:error.response
                 })
            }
       }
       //add contact 
       const addContact =async contact =>{
            const config = {
                  headers:{
                        'Content-Type':'application/json'
                  }
           }
        
            try {
                 const res =  await axios.post('/api/contacts',contact,config)
                 dispatch({
                        type:ADD_CONTACT,
                        payload:res.data
                 })
            } catch (error) {
                  dispatch({
                        type:ERROR_CONTACT,
                        payload:error.response.msg
                 })
            }
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
                error:state.error,
                filtered:state.filtered,
                contactClearFiltred,
                contactFilter,
                setCurrent,
                clearCurrent,
                addContact,
                updateContact,
                deleteContact,
                getContact
            }}>
                {props.children}
            </contactContext.Provider>
       )   
}

export default ContactState
