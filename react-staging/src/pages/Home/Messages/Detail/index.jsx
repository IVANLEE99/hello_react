import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const detailList = [
      {
        id: 1,
        title: "message001",
        content: "消息001",
      },
      {
        id: 2,
        title: "message002",
        content: "消息002",
      },
      {
        id: 3,
        title: "message003",
        content: "消息003",
      },
    ];
    const { id, title, content } = this.props.match.params;
    const findResult = detailList.find((detailObj) => {
      return detailObj.id === parseInt(id);
    });
    return (
      <div>
        <ul>
          <li>ID: {this.props.match.params.id}</li>
          <li>TITLE: {this.props.match.params.title}</li>
          <li>Content: {findResult.content}</li>
        </ul>
      </div>
    );
  }
}
