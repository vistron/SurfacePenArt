import React from 'react';
import Toolbar from './component/Header';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './view/Home';
import Portrait from './view/Portrait';
import NotFound from './view/NotFound';
import './css/style.css'

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Toolbar/>
        <Route component={HomePage} exact path="/"/>
        <Route component={Portrait} path="/portrait/"/>
        <Route component={NotFound}/>
      </div>
    </HashRouter>
  );
}

export default App;
