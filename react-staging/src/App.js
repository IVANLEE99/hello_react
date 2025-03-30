import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
class App extends Component {
  state = {
    users: [],
  };
  setUsers = (users) => {
    this.setState({ users });
  };
  render() {
    return (
      <div>
        <div class="container">
          <Search setUsers={this.setUsers} />
          <List users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
