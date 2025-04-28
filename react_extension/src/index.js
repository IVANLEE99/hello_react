import { root } from "./util";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
export const RootContext = React.createContext();
root.render(
  <RootContext.Provider value={root}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootContext.Provider>
);
