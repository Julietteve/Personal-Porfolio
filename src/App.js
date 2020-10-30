import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './NavBar';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body{
    width:100vw;
    height:100vh;
    position:fixed;
    user-select:none;
    box-sizing:border-box;
    margin:0;
  }
`;

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <NavBar></NavBar>
    </BrowserRouter>
  );
}

export default App;
