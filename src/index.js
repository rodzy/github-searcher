import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { userReducer } from "./reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { watchLoadUserData } from "../src/components/content";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchLoadUserData);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
