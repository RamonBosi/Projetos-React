import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProjectRoutesProvider from './Routes/RouteContext';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <ContextProjectRoutesProvider>
      <App />
    </ContextProjectRoutesProvider>
  </React.StrictMode>
);

reportWebVitals();