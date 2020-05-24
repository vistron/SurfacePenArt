import React from 'react';
import Toolbar from './component/Header';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/Home';
import Portrait from './view/Portrait';
import NotFound from './view/NotFound';
import './css/style.css'

function App() {
  return (
    <div>
      <Toolbar/>
      <Switch>
        <Route component={HomePage} exact path="/"/>
        <Route component={Portrait} exact path="/portrait"/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
