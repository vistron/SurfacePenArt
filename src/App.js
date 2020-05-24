import React, { useEffect } from 'react';
import Toolbar from './component/Header';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/Home';
import Portrait from './view/Portrait';
import NotFound from './view/NotFound';
import useReactRouter from 'use-react-router';
import './css/style.css';
import { routes } from './routes';

function App() {

  const {
    history,
    location: { pathname },
  } = useReactRouter();

  useEffect(() => {
    if (!routes.includes(pathname)) {
      history.replace(routes[0]);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Toolbar/>
      <Switch>
        <Route component={HomePage} exact path="/"/>
        <Route component={Portrait} path="/portrait"/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
