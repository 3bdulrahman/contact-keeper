import React,{useReducer} from 'react'
import axios from 'axios'
import authContext from './authContext'
import{USER_LOADED,LOGIN_SUCCESS,LOGIN_FAIL,AUTH_ERROR,CLEAR_ERRORS,REGISTER_SUCCESS,REGISTER_FAIL, LOGOUT} from '../type'
import authReducer from './authReducer'
import setAuth from './utils/setAuth'
const AuthState = props=>{
     
       const contactInit = {
             token: localStorage.getItem('token'),
             isAuth: false,
             user:null,
             loaded:true,
             errors:null
       };

       const [state,dispatch] = useReducer(authReducer,contactInit)
       const loadUser = async ()=>{
           
           setAuth(localStorage.token)

           try {
               const res = await axios.get('/api/auth')
               dispatch({
                    type:USER_LOADED,
                    payload:res.data
               })
               console.log('test',res.data)
           } catch (error) {
               dispatch({
                    type:AUTH_ERROR
               })
               console.log('error')
           }
      }
       const login = async userPayload =>{
          const config = {
               headers: {
                 'Content-Type': 'application/json'
               }
             };
             try {
                 
               const res = await axios.post('/api/auth',userPayload,config)
              
               dispatch({
                     type:LOGIN_SUCCESS,
                     payload:res.data
               })
               loadUser();
             } catch (err) {
                 
                 dispatch({
                      type:LOGIN_FAIL,
                      payload:err.response.data.msg
                 })
             }
       }
       const logout = ()=> dispatch( { type:LOGOUT })
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
            loadUser();
          } catch (err) {
              
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
                clearErrors,
                register,
                loadUser,
                login,
                logout
            }}>
                {props.children}
            </authContext.Provider>
       )   
}

export default AuthState
