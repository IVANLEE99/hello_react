import { NavLink, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
function App() {
  const element = useRoutes(routes);
  function computedClassName({ isActive }) {
    return isActive ? "list-group-item myactive" : "list-group-item";
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={computedClassName} to="/about">
              About
            </NavLink>
            <NavLink className={computedClassName} to="/home" end>
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">{element}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
