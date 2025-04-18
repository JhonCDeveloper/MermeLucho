import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Router aquí */}
      <App />       {/* Tu app completa vive aquí */}
    </BrowserRouter>
  </React.StrictMode>
);