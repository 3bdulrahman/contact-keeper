import React,{useReducer} from 'react'
import alertContext from './alertContext'
import uuid from 'uuid/v4'
import{SET_ALERT,REMOVE_ALERT} from '../type'
import alertReducer from './alertReducer'
const AlertState = props=>{
       const contactInit = [];
       const alerName = 'text'
       const [state,dispatch] = useReducer(alertReducer,contactInit)
       const setAlert = (msg,type,timeout=5000)=>{
            console.log(msg)
            const id = 37373
            dispatch({ type:SET_ALERT,payload: { msg,type,id } })
            setTimeout(()=>{
                  dispatch({ type:REMOVE_ALERT,payload:id })
            },timeout)
       }
       return(
            <alertContext.Provider value={{
                 alert:state,
                 alerName,
                 setAlert
            }}>
                {props.children}
            </alertContext.Provider>
       )   
}

export default AlertState
