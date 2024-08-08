// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // gunakan 'react-dom/client' jika menggunakan React 18
import App from './App';  // Import dari src/App.js

const root = ReactDOM.createRoot(document.getElementById('root')); // gunakan 'createRoot' jika menggunakan React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
