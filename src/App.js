import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function app() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/Login">
            <h1>Log Page</h1>
          </Route>
          <Route path="/">
            <h1>HOME PAGE!!!</h1>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default app;


