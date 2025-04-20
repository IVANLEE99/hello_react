import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Messages extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link
              to={{
                pathname: "/home/message/detail",
                state: {
                  id: 1,
                  title: "message001",
                },
              }}
            >
              message001
            </Link>
            &nbsp;&nbsp;
          </li>
          <li>
            <Link
              to={{
                pathname: "/home/message/detail",
                state: {
                  id: 2,
                  title: "message002",
                },
              }}
            >
              message002
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/home/message/detail",
                state: {
                  id: 3,
                  title: "message003",
                },
              }}
            >
              message003
            </Link>
          </li>
        </ul>
        <Route path="/home/message/detail" component={Detail} />
      </div>
    );
  }
}
