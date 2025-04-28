// import React, { Component } from "react";
// // 正确写法（React 18+）
// import { RootContext } from "../../index";
// import { root } from "../../util";
// class Demo extends Component {
//   // static contextType = RootContext;
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     // console.log(props, this.context, RootContext);
//     this.rootInstance = root;
//     this.inputRef = React.createRef();
//   }
//   increment = () => {
//     const { count } = this.state;
//     this.setState({ count: count + 1 });
//   };
//   destroy = () => {
//     this.rootInstance.unmount();
//   };
//   show = () => {
//     alert(this.inputRef.current.value);
//   };
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({ count: this.state.count + 1 });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     console.log("卸载");
//     clearInterval(this.timer);
//   }
//   render() {
//     return (
//       <div>
//         <input ref={this.inputRef} type="text" />
//         <h1>当前求和为：{this.state.count}</h1>
//         <button onClick={this.increment}>点击+</button>
//         <button onClick={this.destroy}>销毁</button>
//         <button onClick={this.show}>显示输入框的内容</button>
//       </div>
//     );
//   }
// }

import { root } from "../../util";
import React, { useState, useEffect, useRef } from "react";
const Demo = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const increment = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    let timer = setInterval(() => {
      increment();
      console.log("dfdf");
    }, 1000);
    return () => {
      console.log("卸载");
      clearInterval(timer);
    };
  }, []);
  function destroy() {
    root.unmount();
  }
  function show(){
    alert(inputRef.current.value)
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <h1>当前求和为：{count}</h1>
      <button onClick={increment}>点击+</button>
      <button onClick={destroy}>销毁</button>
      <button onClick={show}>显示输入框的内容</button>
    </div>
  );
};

export default Demo;
