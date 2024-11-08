import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Header from './components/Header.js';
import Footer from './components/Footer.tsx'




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header
       
      />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
