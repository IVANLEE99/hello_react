import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "打豆豆", done: false },
    ],
  };
  addTodo = (todoObj) => {
    const { todos } = this.state;
    this.setState({ todos: [todoObj, ...todos] });
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done };
        }
        return todo;
      }),
    });
  };
  deleteTodo = (id) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((todo) => todo.id !== id) });
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
