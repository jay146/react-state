import React, { useState } from "react";
import ReactDOM from "react-dom";
const strikeThrough = { textDecoration: "line-through" };
var isDone = true;

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    // console.log("button got clicked" + count);
    setCount(count + 1);
    console.log(count);
  }
  function decrement() {
    // console.log("button got clicked" + count);
    setCount(count - 1);
    console.log(count);
  }
  return (
    <div className="container">
      <h1>{[count]}</h1>
      <button type="button" onMouseOver={increment}>
        +
      </button>
      <button type="button" onMouseOver={decrement}>
        -
      </button>
    </div>
  );
}

export default App;
