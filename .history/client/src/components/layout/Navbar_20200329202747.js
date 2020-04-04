import React from 'react'
import PropTypes from 'prop-types'

 const Navbar = ({title}) => {
    return (
        <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">{title}</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Rigester</a></li>
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