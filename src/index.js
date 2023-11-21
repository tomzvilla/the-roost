
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
