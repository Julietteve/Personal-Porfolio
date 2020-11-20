import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {Error404} from './components';
import {Home, About, Skills, Works, Main} from './pages/index'

const GlobalStyle = createGlobalStyle`
  html, body{
    width:100vw;
    height:100vh;
    user-select:none;
    box-sizing:border-box;
    margin:0;
    position:fixed;
    font-family: "rz-regular","maison-neue-mono",Helvetica,Arial,sans-serif;
    @media only screen and (max-width: 768px) {
    position: static;
    width:auto;
    height:auto;
  }
  }
`;

function App() {
  return (
   <div>
     <GlobalStyle/>
     <Switch>
      <Route exact path="/"><Main section={<Home/>}/></Route>
      <Route path="/about"><Main section={<About/>}/></Route>
      <Route path="/skills"><Main section={<Skills/>}/></Route>
      <Route path="/works"><Main section={<Works/>}/></Route>
      <Route component={Error404}></Route>
     </Switch>
   </div>

  );
}

export default App;
