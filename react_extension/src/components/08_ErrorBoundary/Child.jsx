import React, { Component } from "react";
import "./index.css";

export default class Child extends Component {
  state = {
    // users: [
    //   {
    //     id: 1,
    //     name: "张三",
    //   },
    //   {
    //     id: 2,
    //     name: "李四",
    //   },
    // ],
    users: {},
  };
  render() {
    return (
      <div className="a">
        <h1>Child</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
