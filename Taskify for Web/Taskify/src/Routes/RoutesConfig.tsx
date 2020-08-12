import {BrowserRouter, Route} from 'react-router-dom'
import React from "react";
import Shell from "../Components/Shell";
import App from "../App";
export const routes=(
  <BrowserRouter>
    <div>
      <Route path="/" component={App}></Route>
    </div>
  </BrowserRouter>
);