import React, { Component } from "react";
import "./index.css";

export default class A extends Component {
  state = {
    name: "A",
  };
  changeName = () => {
    this.setState({
      name: this.state.name + "A",
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.name !== this.state.name;
  }
  render() {
    console.log("A render");
    return (
      <div className="a">
        <h1>A</h1>
        <h2>name : {this.state.name}</h2>
        <button onClick={this.changeName}>changeName</button>
        <B name={this.state.name} />
      </div>
    );
  }
}

class B extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name !== this.props.name;
  }
  render() {
    console.log("B render");
    return (
      <div className="b">
        <h1>B</h1>
        name : {this.props.name}
      </div>
    );
  }
}
