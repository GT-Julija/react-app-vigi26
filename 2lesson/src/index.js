import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
//jei nori pamatyti ka rodo App tai 11 eiluteje App
import reportWebVitals from './reportWebVitals';
//import Portfolio from "./pages/Porfolio" ir pasikeisti 11 eilute i Portfolio

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
