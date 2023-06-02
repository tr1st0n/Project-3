import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
