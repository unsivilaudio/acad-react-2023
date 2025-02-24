import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js';
import './index.css';

const doc = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(doc).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
