import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'

// NOTE: HashRouter is correct as far as I can tell for GitHubPages. 
//  If I can hack BrowserRouter to use hashes instead, I'd totally swap for that.
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test">
            <MockHeader />
            <div className="Welcome">
              Welcome
            </div>
            <Home />
          </Route>
          <Route path="/blog">
          <MockHeader />
          <div className="Welcome">
            Blog Page
          </div>
          </Route>
          <Route path="/">
          <div className="Welcome">
            Welcome, this site is under construction. 
          </div>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

const MockHeader = () => {
  return(
    <div className="topHeader">
      <header className="App-header">
          Michael Delgado
      </header>
      <Nav />
    </div>
  )
}

export default App;