import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [sum, setSum] = useState(0);
  return (
    <div>
      <h3>我是About的内容</h3>
      <button onClick={() => setSum(sum + 1)}>点我+1</button>
      <button onClick={() => setSum(sum - 1)}>点我-1</button>
      <p>当前求和为：{sum}</p>
      {sum === 2 ? <Navigate to="/home" /> : <h4>sum的值为{sum}</h4>}
    </div>
  );
}
