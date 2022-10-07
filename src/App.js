import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import HomePage from './pages/HomePage';

function NoteApp() {
  return (
    <div className="note-app">
      <header className="header">
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
