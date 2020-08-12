import React, {ReactElement, useEffect} from 'react';
import './App.css';
import Shell from "./Components/Shell";
import {store} from "./store/configureStore";
import {Provider}  from 'react-redux'

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




