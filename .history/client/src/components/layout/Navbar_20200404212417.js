import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

 const Navbar = ({title}) => {
    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      
      <a class="navbar-brand" href="#">{title}</a>
      
     
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link" to="/"><i className='fa fa-home'></i> Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
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