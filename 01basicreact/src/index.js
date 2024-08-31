import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pc from './Pc';

const root = ReactDOM.createRoot(document.getElementById('root'));  //here ReactDOM create a virtual DOM
root.render(
  <React.StrictMode>    //this is for developers can be removed!
    <>
      <Pc></Pc>   //it can also be written as <Pc />
      <App />       //rendering a single html tag for rendering multiple tags use <></> this called fragment and put all the tags inside this fragment which will be treated as a single tag
    </>
  </React.StrictMode>
);


