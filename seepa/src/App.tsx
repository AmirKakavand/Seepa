import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
  return (
    <div className="App">

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
