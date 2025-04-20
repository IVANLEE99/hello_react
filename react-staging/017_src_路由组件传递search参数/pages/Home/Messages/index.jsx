import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Messages extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/message/detail?id=1&title=message001">
              message001
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail?id=2&title=message002">
              message002
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail?id=3&title=message003">
              message003
            </Link>
            &nbsp;&nbsp;
          </li>
        </ul>
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
