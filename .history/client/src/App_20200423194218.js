import React,{Fragment} from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ContactState  from './context/contact/ContactState'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AuthState from './context/auth/authState'
import AlertState from './context/alert/alertState'
import Alert from './components/layout/Alert'
import setAuth from './context/auth/utils/setAuth'

if(localStorage.token){
  setAuth(localStorage.token)
}
import './App.css'
const  App = ()=> {
   return (
     <AuthState>
    <ContactState>
      <AlertState>
    <Router>
    <Fragment>
         <Navbar   />
         <div className='container'>
           <Alert />
             <Switch>
               <Route exact path='/' component={Home} />
               <Route exact path='/about' component={About} />
               <Route exact path='/register' component={Register} />
               <Route exact path='/login' component={Login} />
             </Switch>
         </div>
    </Fragment>
    </Router>
    </AlertState>
    </ContactState>
    </AuthState>
  );
}

export default App;
