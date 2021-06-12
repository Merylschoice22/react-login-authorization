import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h1>Register!</h1>
      <form className="form">
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Register;
