import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register!</h1>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <button>SUBMIT</button>
      </form>
      <Link to="/home">Home</Link>
    </div>
  );
};

export default Register;
