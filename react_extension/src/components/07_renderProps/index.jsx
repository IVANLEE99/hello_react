import React, { Component } from "react";
import "./index.css";

export default class A extends Component {
  render() {
    return (
      <div className="a">
        <h1>A</h1>
        <B render={(name) => <C name={name} />} />
      </div>
    );
  }
}

export class B extends Component {
  render() {
    return (
      <div className="b">
        B
        {/* <C /> */}
        {/* {this.props.children} */}
        {this.props.render("sssssss")}
      </div>
    );
  }
}

export class C extends Component {
  render() {
    return <div className="c">C{this.props.name}</div>;
  }
}
