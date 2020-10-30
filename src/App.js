import React from 'react';
import NamePlate from './components/NamePlate'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    </BrowserRouter>
  );
}

export default App;
