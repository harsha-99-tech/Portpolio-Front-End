import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Home from "./components/Home";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Header only if the current path is not the landing page ("/") */}
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing page */}
        <Route path="/home" element={<Home />} /> {/* Home page */}
      </Routes>
    </>
  );
}

export default App;
