import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Login2 from "./Login2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Login Authorization</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/login2">Login2</Link> */}

        <Link to="/register">Register</Link>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/login2" component={Login2} /> */}

          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
