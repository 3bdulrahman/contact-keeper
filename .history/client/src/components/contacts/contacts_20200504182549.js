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
    if(contacts!==null && contacts.length ==0){ return <h4>please add a contact</h4>}
    return (
        <Fragment>
            <TransitionGroup>
            {filtered!==null? filtered.map(contact=> 
            <CSSTransition key={contact.id} timeout={500} classNames='my-node'>
            <ContactsItem key={contact.id} contact={contact} />
            </CSSTransition>
            ):contacts.map(
                contact=>
                <CSSTransition key={contact.id} timeout={500} classNames='my-node'>
                 <ContactsItem key={contact.id} contact={contact} />
                 </CSSTransition>
                )}
            </TransitionGroup>
            
        </Fragment>
    )
}
export default Contacts