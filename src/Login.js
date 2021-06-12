import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login!</h1>
      <form className="form">
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>LOG IN</button>
      </form>
    </div>
  );
};

export default Login;
