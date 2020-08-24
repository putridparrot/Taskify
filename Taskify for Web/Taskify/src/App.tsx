import React, {ReactElement} from 'react';
import {Provider}  from "react-redux";
import './App.css';
import Shell from "./Components/Shell";
import store from "./redux/store";

function App(): ReactElement {    
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <Shell />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;




