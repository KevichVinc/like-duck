import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { index } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={index}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
