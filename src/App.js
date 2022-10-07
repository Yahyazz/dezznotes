import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
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
          <Route path="/notes/add" element={<AddPage />} />
          <Route path="/notes/detail/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
