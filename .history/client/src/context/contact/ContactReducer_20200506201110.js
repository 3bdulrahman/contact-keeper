import {GET_CONTACT,CLEAR_CONTACT, UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER, ERROR_CONTACT} from '../type'

export default (state,action)=>{
      switch(action.type){ 
          case GET_CONTACT:
              return {
                    ...state,
                    contacts:action.payload
              }
          case ERROR_CONTACT:
              return{
                   ...state,
                    error:action.payload
              }
          case CLEAR_CONTACT:
                return{
                    ...state,
                    contacts:[],
              current:null,
              filtered:null,
              error:null
               
              }
          case ADD_CONTACT:
              return { ...state,contacts:[...state.contacts,action.payload]} 
          case DELETE_CONTACT:
              return { ...state,contacts:state.contacts.filter(contact=> contact._id!= action.payload)} 
          case SET_CURRENT:
              return {...state,current:action.payload} 
          case UPDATE_CONTACT:
             
              return {...state,contacts:state.contacts.map(contact=> contact._id === action.payload._id ? action.payload:contact  )}
          case CLEAR_CURRENT:
              return {...state,current:null}
          case FILTER_CONTACTS:
              return { ...state, filtered:state.contacts.filter(contact=>{
                   const regx = new RegExp(`${action.payload}`,'gi')
                   return contact.name.match(regx)|| contact.email.match(regx)
              }) }
         case CLEAR_FILTER:
             return { ...state, filtered:null}
           default:
               return state
      }
    
}