import React from 'react';
import Toolbar from './component/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './view/Home';
import Portrait from './view/Portrait';
import NotFound from './view/NotFound';
import './css/style.css'

function App() {
  return (
    <div>
      <Toolbar/>
      <BrowserRouter basename="https://surfacepenart.com">
      <Switch>
        <Route component={HomePage} exact path="/"/>
        <Route component={Portrait} path="/portrait"/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
