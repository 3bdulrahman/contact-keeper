import React,{useReducer} from 'react'
import alertContext from './alertContext'
import{SET_ALERT,REMOVE_ALERT} from '../type'
import alertReducer from './alertReducer'
const AlertState = props=>{
       const contactInit = {
          
       };
       const [state,dispatch] = useReducer(alertReducer,contactInit)
      
       return(
            <authContext.Provider value={{
               
            }}>
                {props.children}
            </authContext.Provider>
       )   
}

export default AlertState
