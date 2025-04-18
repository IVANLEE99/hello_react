import React, { Component } from "react";
import "./index.css";

export default class About extends Component {
  render() {
    return <div>About</div>;
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state);
    return null;
  }
}
