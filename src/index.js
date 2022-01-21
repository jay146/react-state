import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

var count = 0;
function increment() {
  count++;
  console.log("button got clicked" + count);
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button type="button" onClick={increment}>
        +
      </button>
    </div>,
    document.getElementById("root")
  );
}
function decrement() {
  count--;
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button type="button" onClick={increment}>
      +
    </button>
  </div>,
  document.getElementById("root")
);
