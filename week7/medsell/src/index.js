import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ClassComponent from './classComponent';
import Navbar from './components/navbar/Navbar';
import './tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />

  </React.StrictMode>
);
