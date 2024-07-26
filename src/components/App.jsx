import React, { useState } from "react";
import Login from "./Login";
import Form from "./Form";

var isLoggedIn = false;
const currentTime = new Date().getHours();
var isRegisteredUser = false;

function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+++</button>
      <button onClick={decrease}>---</button>
      <br />
      <Form isRegistered={isRegisteredUser} />
      {currentTime > 12 ? <h1>Why are you Still working?</h1> : null}
    </div>
  );
}

export default App;
