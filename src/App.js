import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from "react";
import './App.css';

//pages
import Home from "./component/Home";
import Users from "./component/Users";
import About from "./component/About";
import User from "./component/User";

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact component={Home} />

          <Route path="/about"  component={About} />
           
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
            
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
