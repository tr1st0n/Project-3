import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
