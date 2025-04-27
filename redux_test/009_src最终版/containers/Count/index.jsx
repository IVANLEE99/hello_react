import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
import React, { Component } from "react";
// import store from "../../redux/store";
class Count extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    const { value } = this.selectNumber;
    // this.setState((state) => ({ count: state.count + value * 1 }));
    // store.dispatch(incrementAction(value * 1));
    this.props.increment(value * 1);
  };
  decrement = () => {
    const { value } = this.selectNumber;
    // this.setState((state) => ({ count: state.count - value * 1 }));
    // store.dispatch(decrementAction(value * 1));
    this.props.decrement(value * 1);
  };
  incrementOdd = () => {
    const { value } = this.selectNumber;
    // const count = store.getState();
    // if (count % 2 !== 0) {
    //   // this.setState((state) => ({ count: state.count + value * 1 }));
    //   // store.dispatch(incrementAction(value * 1));
    // }
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // setTimeout(() => {
    //   // this.setState((state) => ({ count: state.count + value * 1 }));
    //   store.dispatch(incrementAction(value * 1));
    // }, 500);
    // store.dispatch(incrementAsyncAction(value * 1, 500));
    this.props.incrementAsync(value * 1, 500);
  };
  render() {
    // let count = store.getState();
    return (
      <div>
        <h1>Count组件,当前person人数为：{this.props.persons.length}</h1>
        <h2>当前求和为：{this.props.count}</h2>
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

export default connect(
  (state) => ({ count: state.count, persons: state.persons }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count);
