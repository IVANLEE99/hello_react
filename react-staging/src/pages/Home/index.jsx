import React, { Component } from "react";
import MyNavLink from "../../components/myNavLink";
import News from "./News";
import Messages from "./Messages";
import { Route, Switch, Redirect } from "react-router-dom";
import "./index.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <ul class="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Messages} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
