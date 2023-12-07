import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';     
import 'bootstrap/dist/css/bootstrap.min.css'; /* The following line can be included in your src/index.js or App.js file */



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
