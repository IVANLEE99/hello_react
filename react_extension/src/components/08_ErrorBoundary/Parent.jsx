import React, { Component } from "react";
import "./index.css";
import Child from "./Child";

export default class Parent extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError", error);
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("componentDidCatch", error, info);
  }
  render() {
    return (
      <div className="a">
        <h1>Parent</h1>
        {this.state.hasError ? <h1>网络错误，请稍后重试～</h1> : <Child />}
      </div>
    );
  }
}
