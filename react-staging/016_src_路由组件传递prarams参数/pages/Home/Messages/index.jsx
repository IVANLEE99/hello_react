import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Messages extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/message/detail/1/message001">message001</Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail/2/message002">message002</Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link to="/home/message/detail/3/message003">message003</Link>
            &nbsp;&nbsp;
          </li>
        </ul>
        <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>
    );
  }
}
