import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import App from "../App";
import LoginComponent from "../Components/Login";
import SignupComponent from "../Components/Signup";

// eslint-disable-next-line import/prefer-default-export
export const routes = (
  <BrowserRouter>
    <Route path="/" component={LoginComponent} exact />
    <Route path="/signup" component={SignupComponent} />
    <Route path="/app" component={App} />          
  </BrowserRouter>
);