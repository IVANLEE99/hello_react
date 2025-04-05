import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };
  render() {
    return (
      <div>
        <div class="container">
          <Search updateAppState={this.updateAppState} />
          <List {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
