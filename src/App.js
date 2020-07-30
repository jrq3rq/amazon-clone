import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from "./Home.js";
import Login from "./Login.js";
import Checkout from "./Checkout";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<<<<<< POWERFUL!!
  //code that runs based ona given condition
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out 
        dispatch({
          type: "SET_USER",
          user: authUser
        }); 
      }
    });
    return () => {
      //any cleanup operations go in here...
      unsubcribe();
    }

  }, []);

  console.log("USER IS >>>>>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


