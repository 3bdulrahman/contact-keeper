import React,{useContext,Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import authContext from '../../context/auth/authContext'

 const Navbar = ({title}) => {
   const context = useContext(authContext)
   const { logout , isAuth , user }
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <a className="navbar-brand" href="#">{title}</a>

      <ul className="navbar-nav">
        { isAuth ?'hye':'h'}
      
      </ul>
    </nav>
    )
}

Navbar.propTypes= {
     title:PropTypes.string.isRequired
}
Navbar.defaultProps = {
     title:'Keeper default '
}

export default Navbar