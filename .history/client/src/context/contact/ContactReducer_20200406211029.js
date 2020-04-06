import { UPDATE_CONTACT,CLEAR_CURRENT,DELETE_CONTACT,SET_CURRENT,ADD_CONTACT,SET_ALERT,REMOVE_ALERT,
    FILTER_CONTACTS,CLEAR_FILTER} from '../type'

export default (state,action)=>{
      switch(action.type){ 
          case ADD_CONTACT:
              return { ...state,contacts:[...state.contacts,action.payload]}   
           default:
               return state
      }
}