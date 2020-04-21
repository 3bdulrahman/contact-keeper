import React,{useState,useContext,useEffect} from 'react'
import contactContext from '../../context/contact/ContactContext'
 const Contactform = () => {
    const context = useContext(contactContext)
    const {addContact,current,updateContact,clearCurrent} = context
    const [ contact,setContact] = useState({
          name:'' , email:'',phone:'',type:'personal'
    })
    useEffect(()=>{
            if(current!=null){
                setContact(current)
            }else{
            setContact({name:'' , email:'',phone:'',type:'personal'})
            }
    },[context,current])
    
    const {name,email,phone,type} = contact
    const onChange = e=> setContact({...contact,[e.target.name]:e.target.value})
    const onSubmit = e=>{ 
        e.preventDefault()
        // add method 
        if(current==null){
            addContact(contact)
        }else{
            updateContact(contact)
            clearAll()
        }
        setContact({name:'' , email:'',phone:'',type:'personal'})
    }
    const clearAll = ()=> clearCurrent()
    return (
        <form onSubmit={onSubmit}> 
        <br />
        <h2>{current ? 'Update CONTACT':'ADD NEW CONTACT'} </h2>
        <br />
            <div className='form-group'>
                <input type='text' className='form-control' 
                placeholder='the name' name='name' value={name} onChange={onChange} />
                <br />
                <input type='text' className='form-control' 
                placeholder='enter email adress'name='email' value={email} onChange={onChange} />
                <br />
                <input type='text' className='form-control' 
                placeholder='the phone' name='phone' value={phone} onChange={onChange} />
                <br />
                type is : personal <input type='radio' 
                 value='personal' name='type' onChange={onChange} checked={type==='personal'}  />{' '}
                  : prof<input type='radio' 
                 value='prof' name='type'  onChange={onChange} checked={type==='prof'}/>
                 <br />
                 <input type='submit' value={current?'update contact':'add new contact'} className='btn btn-block btn-primary' />
                 <br />
                 {current && <div>
                       <button className="btn btn-block btn-light" onClick={clearAll}>clear current</button>
                     </div>}
                
            </div>
        </form>
    )
}


export default Contactform 