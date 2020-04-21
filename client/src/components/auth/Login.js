import React,{useState} from 'react'

const Login = () => {
    const [user,setReg] = useState({
           email:'',
           password:''
    })
    const {email,password} = user
    const onChange = e => setReg({...user,[e.target.name]:e.target.value})
    const onSubmit = e=> {
         e.preventDefault()
         console.log('Login success ')
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