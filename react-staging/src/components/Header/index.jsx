import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>
              React Router Demo &nbsp;&nbsp;
              <button
                onClick={() => {
                  this.props.history.goForward();
                }}
              >
                forward
              </button>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  this.props.history.goBack();
                }}
              >
                goBack
              </button>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
