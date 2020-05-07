import React,{useContext,Fragment,useEffect} from 'react'
import ContactContext from '../../context/contact/ContactContext'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import ContactsItem from './contactsItem'
import Snip from '../../context/contact/Snip'
 const Contacts = () => {

    const contextContact = useContext(ContactContext)
    const {contacts,filtered,getContact,loading} = contextContact
    useEffect(() => {
        getContact();
        // eslint-disable-next-line
      }, []);
    if(contacts!==null &&!loading&& contacts.length ===0){ return <h4>please add a contact</h4>}
    return (
        <Fragment>
            <TransitionGroup>
            { contacts!==null && !loading?
                (<div>ok</div>
                ):(<Snip />)}
            </TransitionGroup>
            
        </Fragment>
    )
}
export default Contacts