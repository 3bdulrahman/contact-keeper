import React,{useContext } from 'react'
import {Route , Redirect } from 'react-router-dom'
import authContext from '../../context/auth/authContext'
 const PrivateRoute = ({ component:Component , ...rest }) => {
    const auth = useContext(authContext)
    const { isAuth, loaded} = auth
  //  console.log(...rest)
    return (
       <Route render={props=> !isAuth  ?(
            <Redirect to='/login' />
        ):<Component  {...props} /> } />
    )
}

export default PrivateRoute
