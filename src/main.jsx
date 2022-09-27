import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home/Index';
import '../dist/output.css'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
