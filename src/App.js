import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {Home, About, Skills, Works, Main} from './pages/index'

const GlobalStyle = createGlobalStyle`
  html, body{
    width:100vw;
    height:100vh;
    user-select:none;
    box-sizing:border-box;
    margin:0;
  }
`;

function App() {
  return (
   <div>
     <GlobalStyle/>
     <Switch>
      <Route exact path="/"><Main section={<Home/>}/></Route>
      <Route path="/me"><Main section={<About/>}/></Route>
      <Route path="/skills"><Main section={<Skills/>}/></Route>
      <Route path="/works"><Main section={<Works/>}/></Route>
     </Switch>
   </div>

  );
}

export default App;
