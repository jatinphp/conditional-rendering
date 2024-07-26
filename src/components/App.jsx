import React from "react";
import Login from "./Login";
import Form from "./Form";

var isLoggedIn = false;
const currentTime = new Date().getHours();
var isRegisteredUser = false;

function App() {
  return (
    <div className="container">
      {isRegisteredUser ? <Login /> : <Form />}
      {currentTime > 12 ? <h1>Why are you Still working?</h1> : null}
    </div>
  );
}

export default App;
