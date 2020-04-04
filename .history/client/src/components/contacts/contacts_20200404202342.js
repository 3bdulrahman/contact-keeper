import React,{useContext,Fragment} from 'react'
import ContactContext from '../../context/contact/ContactContext'
export const Contacts = () => {
    const contextContact = useContext(ContactContext)
    const {contacts} = contextContact
    return (
        <Fragment>
              {  contacts.map(contact=> <h2>{contact.name}</h2>)}
        </Fragment>
    )
}
