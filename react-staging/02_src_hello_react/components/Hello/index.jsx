import React, { Component } from "react";
import HelloStyle from "./index.module.css";

class Hello extends Component {
  render() {
    return (
      <div className={HelloStyle.title}>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Hello;
