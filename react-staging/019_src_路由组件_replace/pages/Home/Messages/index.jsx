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
                pathname: "/home/message/detail/1",
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
                pathname: "/home/message/detail/2",
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
                pathname: "/home/message/detail/3",
                state: {
                  id: 3,
                  title: "message003",
                },
              }}
              replace
            >
              message003
            </Link>
          </li>
        </ul>
        <Route path="/home/message/detail/:id" component={Detail} />
      </div>
    );
  }
}
