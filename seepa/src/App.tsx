import React from 'react';
import './App.css';
import routes from './routes/routes'
import Navigation from './components/layout/Navigation/Navigation.layout';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navigation />

      {routes}
    </div>
  );
}

export default App;
