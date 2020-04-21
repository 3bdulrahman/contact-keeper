import React,{useState} from 'react'

const Register = () => {
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
         console.log('register success ')
    }
    return (
        <div className='container-form'>
             <form>
                 <div className='form-group'>
                     <label htmlFor='name'>username</label>
                      <input type='text' name='name' value={name} onChange={onchange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='email'>username</label>
                      <input type='email' name='email' value={email} onChange={onchange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='password'>password</label>
                      <input type='password' name='password' value={password} onChange={onchange} />
                 </div>
                 <div className='form-group'>
                 <label htmlFor='password2'>Confirm password</label>
                      <input type='password' name='password2' value={password2} onChange={onchange} />
                 </div>
                 <input type='submit' value='Register...' className='btn btn-primary btn-block' />
             </form>
        </div>
    )
}

export default Register