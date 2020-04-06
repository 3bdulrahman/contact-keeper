import React,{useState,useContext} from 'react'
import ContactContext from '../../context/contact/ContactContext'
import contactContext from '../../context/contact/ContactContext'
 const Contactform = () => {
    const [ contact,setContact] = useState({
          name:'' , email:'',phone:'',type:'personal'
    })
    const context = useContext(contactContext)
    const {name,email,phone,type} = contact
    const onChange = e=> setContact({...contact,[e.target.name]:e.target.value})
    const onSubmit = e=>{ 
        e.preventDefault()
        // add method 
        context.addContact(contact)
       
        setContact({name:'' , email:'',phone:'',type:'personal'})
    }
    return (
        <form onSubmit={onSubmit}> 
        <h2>ADD NEW CONTACT </h2>
            <div className='form-group'>
                <input type='text' className='form-control' 
                placeholder='the name' name='name' value={name} onChange={onChange} />
                <input type='text' className='form-control' 
                placeholder='enter email adress'name='email' value={email} onChange={onChange} />
                <input type='text' className='form-control' 
                placeholder='the phone' name='phone' value={phone} onChange={onChange} />
                type is : <input type='radio' 
                 value='personal' name='type' onChange={onChange} checked={type==='personal'}  />{' '}
                  <input type='radio' 
                 value='prof' name='type'  onChange={onChange} checked={type==='prof'}/>
                 <input type='submit' text='Add new' className='btn btn-block btn-primary' />

                
            </div>
        </form>
    )
}


export default Contactform 