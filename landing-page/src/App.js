import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";// Importa Router
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import BackGround from "./components/BackGround";
import ServicesSection from "./components/ServicesSection";
import BookSection from "./components/BookSection";
import AboutUsSection from "./components/AboutUsSection";
import ContactUsSection from "./components/ContactUsSection";

function App() {
  return (
    <Router> {/* Envuelve todo en el componente Router */}
      <div className="h-screen flex flex-col">
        <div className="flex-1 bg-gradient-to-tr from-cyan-400 via-blue-400 to-blue-800 to-purple-600"></div>
        <div className="flex-1 bg-gray-200"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-11/12 h-4/5 bg-transparent relative mt-[-100px]">
            <Nav />
            <SearchBar />
            <Routes> {/* Envuelve tus rutas en el componente Routes */}
              <Route path="/" element={<MainContent />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/book" element={<BookSection />} />
              <Route path="/about" element={<AboutUsSection />} />
              <Route path="/contact" element={<ContactUsSection />} />
            </Routes>
            <BackGround />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;