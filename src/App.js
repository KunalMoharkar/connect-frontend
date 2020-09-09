import React from 'react';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {Button} from './components/Button/button';
import {Navbar} from './components/Navbar/navbar';
import {Profilecard} from './components/Profilecard/profilecard';
library.add(fab);


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Button text="View Profile"/>
      <Profilecard />
    </div>
  );
}

export default App;
