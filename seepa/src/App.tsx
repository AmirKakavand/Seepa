import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes/routes';
import Navigation from './components/layout/Navigation/Navigation.layout';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navigation />
      {/* Routes */}
      <Switch>
        {Routes.map(route => {
          return (
            <Route key={route.path} path={route.path} exact={route.exact}></Route>
          )
        })}
      </Switch>
    </div>
  );
}

export default App;
