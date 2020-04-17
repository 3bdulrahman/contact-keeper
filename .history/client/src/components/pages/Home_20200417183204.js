import React from 'react'
import Contacts from '../contacts/contacts'
import Contactform from '../contacts/contactForm'
import ContactFilter from '../contacts/contactFilter'
 const Home = () => {
    return (
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <Contactform />
            </div>
             <div className="col-md-6 col-lg-6">
                 <br />
                 <ContactFilter />
                 <br />
                 <Contacts /></div>
        </div>
    )
}

export default Home 