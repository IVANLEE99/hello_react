import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Home() {
  function computedClassName({ isActive }) {
    return isActive ? "list-group-item myactive" : "list-group-item";
  }
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className={computedClassName} to="news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={computedClassName} to="messages">
              Message
            </NavLink>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
