import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SectionTemplate1 from "./components/SectionTemplate1";
import SectionFooterTemplate from "./components/SectionFooterTemplate";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
      <SectionFooterTemplate />
    </Router>
  );
}

export default App;
