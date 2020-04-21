import React,{useReducer} from 'react'
import axios from 'axios'
import authContext from './authContext'
import{USER_LOADED,LOGIN_SUCCESS,LOGIN_FAIL,AUTH_ERROR,CLEAR_ERRORS,REGISTER_SUCCESS,REGISTER_FAIL} from '../type'
import authReducer from './authReducer'
const AuthState = props=>{
       const contactInit = {
             token: localStorage.getItem('token'),
             isAuth: null,
             user:null,
             loaded:true,
             errors:null
       };
       const [state,dispatch] = useReducer(authReducer,contactInit)
       const register = async usePayload =>{
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          try {
            const res = await axios.post('/api/users',usePayload,config)

            dispatch({
                  type:REGISTER_SUCCESS,
                  payload:res.data
            })
           
          } catch (err) {
              console.log(err.response)
              dispatch({
                   type:REGISTER_FAIL,
                   payload:err.response.data.msg
              })
          }
       }
       const clearErrors = ()=> dispatch({ type: CLEAR_ERRORS})
       return(
            <authContext.Provider value={{
                token:state.token,
                isAuth: state.isAuth,
                user:state.user,
                loaded:state.loaded,
                errors:state.errors,
                register
            }}>
                {props.children}
            </authContext.Provider>
       )   
}

export default AuthState
