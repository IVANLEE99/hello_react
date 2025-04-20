import React, { Component } from "react";
// import qs from "qs";

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
    // const { id, title } = qs.parse(this.props.location.search.slice(1));
    const { id, title } = this.props.match.params || {};
    const findResult = detailList.find((detailObj) => {
      return detailObj.id === parseInt(id);
    }) || {};
    return (
      <div>
        <ul>
          <li>ID: {id}</li>
          <li>TITLE: {title}</li>
          <li>Content: {findResult.content}</li>
        </ul>
      </div>
    );
  }
}
