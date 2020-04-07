import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'

// NOTE: HashRouter is correct as far as I can tell for GitHubPages. 
//  If I can hack BrowserRouter to use hashes instead, I'd totally swap for that.
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/test">
            <MockHeader />
            <Home />
          </Route>
          <Route path="/users">
          <MockHeader />
            Users Page
          </Route>
          <Route path="/">
          <header className="App-header">
            Welcome, this site is under construction.
          </header>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

const MockHeader = () => {
  return(
    <React.Fragment>
      <header className="App-header">
          Michael Delgado
      </header>
      <Nav />
    </React.Fragment>
  )
}

export default App;