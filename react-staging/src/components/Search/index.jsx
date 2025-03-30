import React, { Component } from "react";
import "./index.css";
import axios from "axios";

export default class Search extends Component {
  handleSearch = () => {
    let {
      keywordElement: { value: keyword },
    } = this;
    axios
      .get(`/api1/search/users?q=${keyword}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
