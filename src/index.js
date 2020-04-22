import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);