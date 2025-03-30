import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  handleClick = () => {
    axios
      .get("http://localhost:3000/students")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>点击获取学生数据</button>
      </div>
    );
  }
}

export default App;
