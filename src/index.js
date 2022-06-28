import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer, {initialState } from "./Apis/Reducer";
import { StateProvider } from "./Apis/StateContext"
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
