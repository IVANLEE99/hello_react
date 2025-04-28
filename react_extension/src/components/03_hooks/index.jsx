// import React, { Component } from "react";

// export default class Demo extends Component {
//   state = { count: 0 };
//   increment = () => {
//     const { count } = this.state;
//     this.setState({ count: count + 1 });
//   };
//   render() {
//     return (
//       <div>
//         <h1>当前求和为：{this.state.count}</h1>
//         <button onClick={this.increment}>点击+</button>
//       </div>
//     );
//   }
// }
import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <button onClick={increment}>点击+</button>
    </div>
  );
};

export default Demo;
