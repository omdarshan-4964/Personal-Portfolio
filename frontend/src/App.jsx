// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { PortfolioProvider } from './context/PortfolioContext';
import './App.css';

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <div className="App">
          <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }}
></div>

            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Gallery />
                  <Contact />
                </motion.div>
              } />
            </Routes>
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      </Router>
    </PortfolioProvider>
  );
}

export default App;