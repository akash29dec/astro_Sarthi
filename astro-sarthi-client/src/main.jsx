import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create root and render App without StrictMode
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);