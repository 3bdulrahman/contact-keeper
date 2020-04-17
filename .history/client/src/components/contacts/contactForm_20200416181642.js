import React,{useState,useContext,useEffect} from 'react'
import ContactContext from '../../context/contact/ContactContext'
import contactContext from '../../context/contact/ContactContext'
 const Contactform = () => {
    const {addContact,current,clearCurrent} = useContext(contactContext)
    const [ contact,setContact] = useState({
          name:'' , email:'',phone:'',type:'personal'
    })
    useEffect(()=>{
            if(current!=null){
                setContact(current)
            }else{
            setContact({name:'' , email:'',phone:'',type:'personal'})
            }
    },[contactContext,current])
    
    const {name,email,phone,type} = contact
    const onChange = e=> setContact({...contact,[e.target.name]:e.target.value})
    const onSubmit = e=>{ 
        e.preventDefault()
        // add method 
        addContact(contact)
       
        setContact({name:'' , email:'',phone:'',type:'personal'})
    }
    return (
        <form onSubmit={onSubmit}> 
        <br />
        <h2>{current ? 'Update CONTACT':'ADD NEW CONTACT'} </h2>
        <br />
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
                 <input type='submit' value={current?'update contact':'add new contact'} className='btn btn-block btn-primary' />

                
            </div>
        </form>
    )
}


export default Contactform 