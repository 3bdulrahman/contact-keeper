import React,{useState,useContext,useEffect} from 'react'
import alertContext from '../../context/alert/alertContext'
import authContext from '../../context/auth/authContext'
const Register = () => {
     const ale = useContext(alertContext)
     const auth = useContext(authContext)
     const {register,errors,clearErrors} = auth 
     useEffect(()=>{
           if(errors!==null){
                 ale.setAlert(errors,'danger')
                 clearErrors()
           }
     },[errors])
    const [user,setReg] = useState({
           name:'',
           email:'',
           password:'',
           password2:''
    })
    
    const {name,email,password,password2} = user
    const onChange = e => setReg({...user,[e.target.name]:e.target.value})
    const onSubmit = e=> {
         e.preventDefault()
         if(name =='' || email ==''|| password ==''){
          ale.setAlert('can not be empty','danger')
         }else if(password!==password2){
          ale.setAlert('password not match','danger')
         }
         else{ 
          register(user)
         }
    }
    return (
        <div className='container'>
             <form className='col-md-4' onSubmit={onSubmit}>
                 <br />
                 <h3>Form Register</h3>
                 <div className='form-group'>
                     <label htmlFor='name'>username</label>
                      <input type='text' className='form-control' name='name' value={name} onChange={onChange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='email'>username</label>
                      <input type='email' className='form-control' name='email' value={email} onChange={onChange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='password'>password</label>
                      <input type='password' className='form-control' name='password' value={password} onChange={onChange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='password2'>Confirm password</label>
                      <input type='password' className='form-control' name='password2' value={password2} onChange={onChange} />
                 </div>
                 <input type='submit' value='Register...' className='btn btn-primary btn-block' />
             </form>
        </div>
    )
}

export default Register