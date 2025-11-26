import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './styles/global.css';
import { CartProvider } from './pages/cartContext';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
