import React from 'react';
import Navbar from './components/layout/Navbar'
import './App.css'
const  App = ()=> {

  return (
    <div className="App">
         <Navbar   />
         <div className='container'>
            <h1>Keeper App</h1>
            <p className="text-danger">this for test using currently <strong>v.123</strong></p>
         </div>

    </div>
  );
}

export default App;
