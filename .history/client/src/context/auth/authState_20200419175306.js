import React,{useReducer} from 'react'

import authContext from './authContext'
import{USER_LOADED,LOGIN_SUCCESS,LOGIN_FAIL,AUTH_ERROR,CLEAR_ERRORS,REGISTER_SUCCESS,REGISTER_FAIL} from '../type'
import authReducer from '../auth/authReducer'
const authState = props=>{
       const contactInit = {
             token: localStorage.getItem('token'),
             isAuth: null,
             user:null,
             loaded:true,
             errors:null
       };
       const [state,dispatch] = useReducer(authReducer,contactInit)
      
       return(
            <authContext.Provider value={{
                token:state.token,
                isAuth: state.isAuth,
                user:state.user,
                loaded:state.loaded,
                errors:state.errors
            }}>
                {props.children}
            </authContext.Provider>
       )   
}

export default authState