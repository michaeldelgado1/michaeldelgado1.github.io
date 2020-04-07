import React from 'react';
import './App.css';
import Nav from './components/nav'

import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome, this site is under construction.
      </header>

      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/test">
            <Nav />
            Test Page
          </Route>
          <Route path="/users">
          <Nav />
            Users Page
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;