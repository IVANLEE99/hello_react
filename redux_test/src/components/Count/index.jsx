import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { value } = this.selectNumber;
    this.setState((state) => ({ count: state.count + value * 1 }));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.setState((state) => ({ count: state.count - value * 1 }));
  };
  incrementOdd = () => {
    const { value } = this.selectNumber;
    if (this.state.count % 2 !== 0) {
      this.setState((state) => ({ count: state.count + value * 1 }));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      this.setState((state) => ({ count: state.count + value * 1 }));
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>Count组件</h1>
        <h2>当前求和为：{this.state.count}</h2>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>加</button>
        &nbsp;
        <button onClick={this.decrement}>减</button>
        <button onClick={this.incrementOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
