import React from "react";
import { useNavigate,useInRouterContext } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const inRouterContext = useInRouterContext();
  console.log(inRouterContext);
  return (
    <div className="page-header">
      <h2>React Router Demo</h2>
      <button onClick={() => navigate(-1)}>后退</button>
      <button onClick={() => navigate(1)}>前进</button>
    </div>
  );
}
