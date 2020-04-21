import {REGISTER_FAIL,REGISTER_SUCCESS, CLEAR_ERRORS} from '../type'
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
            case REGISTER_FAIL:
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