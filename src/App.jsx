import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

