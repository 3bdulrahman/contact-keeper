import React,{useReducer} from 'react'
import alertContext from './alertContext'
import uuid from 'uuid/v4'
import{SET_ALERT,REMOVE_ALERT} from '../type'
import alertReducer from './alertReducer'
const AlertState = props=>{
       const contactInit = [];

       const [state,dispatch] = useReducer(alertReducer,contactInit)
       const setAlert = (msg,type,timeout=5000)=>{
            const id = uuid()
            dispatch({ type:SET_ALERT,payload: { msg,type,id } })
            setTimeout(()=>{
                  dispatch({ type:REMOVE_ALERT,payload:id })
            },timeout)
       }
       return(
            <authContext.Provider value={{
                 alert:state,
                 setAlert
            }}>
                {props.children}
            </authContext.Provider>
       )   
}

export default AlertState
