import React, { Component } from "react";
import "./index.css";
// import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  handleSearch = async () => {
    let {
      keywordElement: { value: keyword },
    } = this;
    PubSub.publish("updateAppState", { isFirst: false, isLoading: true });

    // axios
    //   .get(`/api1/search/users?q=${keyword}`)
    //   .then((response) => {
    //     PubSub.publish("updateAppState", {
    //       isFirst: false,
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //   })
    //   .catch((error) => {
    //     PubSub.publish("updateAppState", {
    //       isFirst: false,
    //       isLoading: false,
    //       err: error.message,
    //     });
    //   });
    try {
      const _response = await fetch(`/api1/search/users?q=${keyword}`);
      let response = await _response.json();
      console.log(response);
      PubSub.publish("updateAppState", {
        isFirst: false,
        isLoading: false,
        users: response.items,
      });
    } catch (error) {
      PubSub.publish("updateAppState", {
        isFirst: false,
        isLoading: false,
        err: error.message,
      });
    }
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
