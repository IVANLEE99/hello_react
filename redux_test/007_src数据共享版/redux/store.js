import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count.js";
import personReducer from "./reducers/person.js";
import thunk from "redux-thunk";

export default createStore(
  combineReducers({ count: countReducer, persons: personReducer }),
  applyMiddleware(thunk)
);
