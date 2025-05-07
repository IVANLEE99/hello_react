import { NavLink, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Header from "./components/Header";
function App() {
  const element = useRoutes(routes);
  function computedClassName({ isActive }) {
    return isActive ? "list-group-item myactive" : "list-group-item";
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
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
