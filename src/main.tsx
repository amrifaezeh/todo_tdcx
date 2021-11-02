import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Store } from "./State/store";

ReactDOM.render(
  <React.StrictMode>
    <Store subPage={<App />} />
  </React.StrictMode>,
  document.getElementById("root")
);
