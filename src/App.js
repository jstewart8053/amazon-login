import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import Signup from './components/Signup';

const App = () => {

  return (
    <div className='App'>
      <img src={logo} alt='amazon logo' role="img" />

      <Signup />
      <hr />


      <footer>
        <span> Conditions of Use </span>
        <span> Privacy </span>
        <span> Help </span>
        <p> © 1996-2020, Amazon.com, Inc. or its affiliates </p>
      </footer>
    </div>
  )
}
export default App;
