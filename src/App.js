import React from "react";
import Header from "./frontend/components/Header";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./frontend/components/signup/SignUp";
import SignIn from "./frontend/components/signin/SignIn";
import SignUpEmail from "./frontend/components/signup/SignUpEmail";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/signupemail" component={SignUpEmail}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/signin" component={SignIn}></Route>
          <Route path="/" component={Header}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
