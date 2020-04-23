import React,{useState,useEffect,useContext} from 'react'
import alertContext from '../../context/alert/alertContext'
import authContext from '../../context/auth/authContext'
const Login = (props) => {
     const ale = useContext(alertContext)
     const auth = useContext(authContext)
     const {errors,clearErrors,isAuth,login} = auth 
     useEffect(()=>{
          if(isAuth){
                props.history.push('/')
          }
           if(errors!==null){
                 ale.setAlert(errors,'danger')
                 clearErrors()
           }
     },[errors,isAuth,props.history])
    const [user,setReg] = useState({
           email:'',
           password:''
    })
    const {email,password} = user
    const onChange = e => setReg({...user,[e.target.name]:e.target.value})
    const onSubmit = e=> {
         e.preventDefault()
         if(email=='' || password == ''){
          ale.setAlert('username and passwod can not be empty','danger')
         }else{
               login(user)
         }
    }
    return (
        <div className='container'>
             <form className='col-md-4' onSubmit={onSubmit}>
                 <br />
                 <h3>Login Form</h3>
            
                 <div className='form-group'>
                 <label htmlFor='email'>username</label>
                      <input type='email' className='form-control' name='email' value={email} onChange={onChange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='password'>password</label>
                      <input type='password' className='form-control' name='password' value={password} onChange={onChange} />
                 </div>
                
                 <input type='submit' value='Login...' className='btn btn-primary btn-block' />
             </form>
        </div>
    )
}

export default Login