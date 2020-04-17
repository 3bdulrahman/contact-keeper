import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

 const Navbar = ({title}) => {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      
      <a className="navbar-brand" href="#">{title}</a>
      
     
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/"><i className='fa fa-home'></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      
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