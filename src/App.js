import React from 'react';
import {createGlobalStyle} from 'styled-components';
import NavBar from './components/NavBar';
import Routes from './routes';

const GlobalStyle = createGlobalStyle`
  html, body{
    width:100vw;
    height:100vh;
    user-select:none;
    box-sizing:border-box;
    margin:0;
    position:fixed;
  }
`;

function App() {
  return (
   <div>
     <GlobalStyle/>
     <NavBar/>
     <Routes/>
   </div>

  );
}

export default App;
