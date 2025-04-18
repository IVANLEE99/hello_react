import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
// import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/myNavLink";
import Test from "./pages/Test";
class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/*               <a className="list-group-item active" href="./about.html">
                About
              </a>
              <a className="list-group-item" href="./home.html">
                Home
              </a> */}
              {/*               <NavLink
                activeClassName="active"
                to="/about"
                className="list-group-item"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active"
                to="/home"
                className="list-group-item"
              >
                Home
              </NavLink> */}
              <MyNavLink to="/youngs/about">About</MyNavLink>
              <MyNavLink to="/youngs/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/youngs/about" component={About} />
                  <Route path="/youngs/home" component={Home} />
                  <Route path="/youngs/test" component={Test} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
