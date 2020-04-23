import React,{useEffect,useContext} from 'react'
import Contacts from '../contacts/contacts'
import Contactform from '../contacts/contactForm'
import authContext  from '../../context/auth/authContext'
import ContactFilter from '../contacts/contactFilter'
 const Home = (props) => {
    const context = useContext(authContext)
    useEffect(() => {
          context.loadUser()
    }, [])
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