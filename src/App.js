import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Home from "./components/Home";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Header only if the current path is not the landing page ("/") */}
      {location.pathname !== "/" && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing page */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />{" "}
        {/* Home page with layout */}
      </Routes>
    </>
  );
}

export default App;
