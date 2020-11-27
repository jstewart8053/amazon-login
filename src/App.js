import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import hr1 from './assets/hr1.png'
import Signup from './components/Signup';

const App = () => {

  return (
    <div className='App'>
      <img src={logo} className="logo" alt="amazon logo" role="img" />

      <Signup />
      <img src={hr1} className="hr" alt="horizontal line" role="img" />


      <footer>
        <span> Conditions of Use </span>
        <span> Privacy Notice </span>
        <span> Help </span>
      </footer>
      <p className='sm-font copyright'> © 1996-2020, Amazon.com, Inc. or its affiliates </p>
    </div>
  )
}
export default App;
