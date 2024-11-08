import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const container = document.getElementById("root");
const root = createRoot(container!);

const Main = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <BrowserRouter>
      <Header heroRef={heroRef} aboutRef={aboutRef} servicesRef={servicesRef} />
      <Routes>
        <Route
          path="/"
          element={
            <App
              heroRef={heroRef}
              aboutRef={aboutRef}
              servicesRef={servicesRef}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);
