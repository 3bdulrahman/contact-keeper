import { UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER} from '../type'

export default (state,action)=>{
      switch(action.type){ 

          case ADD_CONTACT:
              return { ...state,contacts:[...state.contacts,action.payload]} 
          case DELETE_CONTACT:
              return { ...state,contacts:state.contacts.filter(contact=> contact.id!= action.payload)} 
          case SET_CURRENT:
              return {...state,current:action.payload} 
          case UPDATE_CONTACT:
              return {...state,contacts:contacts.map(contact=> contact == action.payload.id ? action.payload:contact  )}
          case CLEAR_CURRENT:
              return {...state,current:null}
           default:
               return state
      }
}