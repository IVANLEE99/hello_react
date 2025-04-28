import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + this.inputRef.value }, () => {
      console.log("更新后的count值为：", this.state.count);
    });
    console.log("更新前count值为：", this.state.count);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <input
          ref={(c) => (this.inputRef = c)}
          type="text"
          placeholder="输入内容"
        />
        <button onClick={this.increment}>点击+</button>
      </div>
    );
  }
}
