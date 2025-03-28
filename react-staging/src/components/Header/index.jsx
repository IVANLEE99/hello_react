import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";
export default class Header extends Component {
  handleKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode === 13) {
      if (target.value.trim() === "") {
        alert("输入不能为空");
        return;
      }
      const todoObj = {
        id: nanoid(),
        name: target.value,
        done: false,
      };
      this.props.addTodo(todoObj);
      event.target.value = "";
    }
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
