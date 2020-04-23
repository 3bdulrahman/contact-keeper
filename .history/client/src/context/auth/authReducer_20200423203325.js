import {REGISTER_FAIL,REGISTER_SUCCESS, CLEAR_ERRORS, AUTH_ERROR, USER_LOADED} from '../type'
export default (state,action)=>{
           
       switch (action.type) {
           case REGISTER_SUCCESS:
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
                localStorage.removeItem('token')
                return{
                     ...state,
                     isAuth:false,
                     loaded:false,
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