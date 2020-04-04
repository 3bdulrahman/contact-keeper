import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

 const Navbar = ({title}) => {
    return (
        <nav class="navbar navbar-default">
        <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{title}</a>
    </div>
        <div class="container" id="myNavbar">
         
          <ul class="nav navbar-nav">
            <li class="active"><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            
          </ul>
          <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
        </div>
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