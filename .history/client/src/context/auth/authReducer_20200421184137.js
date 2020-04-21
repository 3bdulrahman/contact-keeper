import {REGISTER_FAIL,REGISTER_SUCCESS} from '../type'
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
                     error:action.payload

                }
           default:
               return state
       }
}