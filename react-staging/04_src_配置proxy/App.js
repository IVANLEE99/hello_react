import React, { Component } from "react";
import axios from "axios";
class App extends Component {
  getStudentsData = () => {
    axios
      .get("http://localhost:3000/api1/students")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getCarsData = () => {
    axios
      .get("http://localhost:3000/api2/cars")
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
        <button onClick={this.getStudentsData}>点击获取学生数据</button>
        <button onClick={this.getCarsData}>点击获取汽车数据</button>
      </div>
    );
  }
}

export default App;
