import React,{useEffect,useContext,useRef} from 'react'
import contactContext from '../../context/contact/ContactContext'
 const ContactFilter = () => {
    const context = useContext(contactContext)
    const { contactClearFiltred,contactFilter ,filtered} = context
    const text = useRef('')
    useEffect(() => {
         if(filtered == null){
             text.current.value=''
         }
    })
   
    const onChange = e=>{
         if(text.current.value!==''){
            contactFilter(e.target.value)
         }else{
            contactClearFiltred()
         }
    }
    return (
        <form>
            <input ref={text} type='text' placeholder='search contacts' onChange={onChange} />
        </form>
    )
}

export default ContactFilter
