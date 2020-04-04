import React,{useContext,Fragment} from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactsItem from './contactsItem'
 const Contacts = () => {
    const contextContact = useContext(ContactContext)
    const {contacts} = contextContact
    return (
        <Fragment>
            {contacts.map(contact=> <ContactsItem key={contact.id} contact={contact} />)}
        </Fragment>
    )
}
export default Contacts