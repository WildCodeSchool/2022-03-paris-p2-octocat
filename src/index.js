import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Context from "./contexts/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Context>
      <App />
    </Context>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);