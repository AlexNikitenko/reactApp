import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Dog from './Dog';
import Home from './Home';
import Cat from './Cat';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/new-dog">New Dog</Link>
          </li>
          <li>
            <Link to="/new-cat">New Cat</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/new-dog">
            <Dog />
          </Route>
          <Route path="/new-cat">
            <Cat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
