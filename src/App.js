
import React, { useState } from 'react';
import { Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Body from "./Components/Body";
import appStore from './utils/appStore';

function App() {
  return (
    <>
      
    <div >
   
      <Provider store={appStore}>
      <Body/>
      </Provider>
    
     
    
    </div>
     </>
  );
}

export default App;
