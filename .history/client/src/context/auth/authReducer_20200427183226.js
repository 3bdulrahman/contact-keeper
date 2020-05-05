import {REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT, CLEAR_ERRORS, AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL} from '../type'
export default (state,action)=>{
           
       switch (action.type) {
           case REGISTER_SUCCESS:
           case LOGIN_SUCCESS:
               localStorage.setItem('token',action.payload.token)
               return {
                 ...state,
                 ...action.payload,
                 isAuth:true,
                 loaded:false
               }
            case USER_LOADED:
                return {
                    ...state,
                    isAuth:true,
                    loaded:false,
                    user:action.payload
                }
            case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT:
                localStorage.removeItem('token')
                return{
                     ...state,
                     isAuth:false,
                     loaded:true,
                     user:null,
                     token:null,
                     errors:action.payload

                }

                case CLEAR_ERRORS:
                    return { ...state, errors:null }
           default:
               return state
       }
}