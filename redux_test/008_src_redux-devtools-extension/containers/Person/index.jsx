import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPersonAction } from "../../redux/actions/person";
class Person extends Component {
  addPerson = () => {
    const name = this.nameInput.value;
    const age = this.ageInput.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
    this.nameInput.value = "";
    this.ageInput.value = "";
  };
  render() {
    let { persons } = this.props;
    return (
      <div>
        <h1>Person组件,当前求和为：{this.props.count}</h1>
        <input
          ref={(c) => (this.nameInput = c)}
          type="text"
          placeholder="输入名字"
        />
        <input
          ref={(c) => (this.ageInput = c)}
          type="text"
          placeholder="输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {persons.map((p) => (
            <li key={p.id}>
              {p.name}---{p.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    persons: state.persons,
    count: state.count,
  }),
  {
    addPerson: addPersonAction,
  }
)(Person);
