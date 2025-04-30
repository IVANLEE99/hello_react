import React, { Component, createContext } from "react";
import "./index.css";
const stateContext = createContext();

class A extends Component {
  state = {
    name: "A",
  };
  render() {
    return (
      <stateContext.Provider value={this.state}>
        <div className="a">
          <h1>A</h1>
          <B />
        </div>
      </stateContext.Provider>
    );
  }
}

class B extends Component {
  static contextType = stateContext;
  render() {
    return (
      <div className="b">
        <h1>B</h1>
        name : {this.context.name}
        <C />
      </div>
    );
  }
}

class C extends Component {
  render() {
    return (
      <div className="c">
        <h1>C</h1>
        <stateContext.Consumer>
          {(value) => {
            return <h2>name : {value.name}</h2>;
          }}
        </stateContext.Consumer>
      </div>
    );
  }
}

export default A;
