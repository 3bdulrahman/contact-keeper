import React,{useContext,Fragment,useEffect} from 'react'
import ContactContext from '../../context/contact/ContactContext'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ContactsItem from './contactsItem'
 const Contacts = () => {

    const contextContact = useContext(ContactContext)
    const {contacts,filtered,getContact} = contextContact
    useEffect(()=>{
        getContact()
    },[])
    if(contacts!==null && contacts.length ===0){ return <h4>please add a contact</h4>}
    return (
        <Fragment>
            <TransitionGroup>
            { contacts!==null?
                (filtered!==null? filtered.map(contact=> 
                    <CSSTransition key={contact.id} timeout={500} classNames='my-node'>
                    <ContactsItem key={contact.id} contact={contact} />
                    </CSSTransition>
                    ):contacts.map(
                        contact=>
                        <CSSTransition key={contact._id} timeout={500} classNames='my-node'>
                         <ContactsItem key={contact._id} contact={contact} />
                         </CSSTransition>
                        )):<h1>sss</h1>
            }
            </TransitionGroup>
            
        </Fragment>
    )
}
export default Contacts