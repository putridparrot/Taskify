import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import Shell from "../Components/Shell";
import App from "../App";
import LoginComponent from "../Components/Login";
export const routes=(
  <BrowserRouter>
    <switch>
      <Route path="/" component={LoginComponent} exact={true}></Route>
      <Route path="/app" component={App}></Route>          
    </switch>    
  </BrowserRouter>
);