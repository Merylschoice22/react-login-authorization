import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login!</h1>
      <form>
        <input></input>
      </form>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Login;
