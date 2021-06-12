import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="header-text">
            <h1>Single Sandal Saviors</h1>
            <h3>Because no sandal should be alone</h3>
          </div>
          <Navbar />
        </header>
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
