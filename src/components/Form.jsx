import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegistered === false ? (
        <Input type="password" placeholder="Confirm Password" />
      ) : null}

      <button type="submit">
        {props.isRegistered === false ? "Register" : "Login"}
      </button>
    </form>
  );
}

export default Form;
