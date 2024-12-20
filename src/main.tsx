import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Header from './components/Header.js';
import Footer from './components/Footer.tsx'
import NotFound from './components/NotFound.tsx';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
