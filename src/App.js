import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function NoteApp() {
  return (
    <div className="note-app">
      <header className="header">
        <h1 className="text-blue">dezznotes.</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/add" element={<AddPage />} />
          <Route path="/notes/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <div className="footer-item">
          <p>&copy; Copyright 2022 dezznotes.</p>
        </div>
        <div className="footer-item">
          <p>
            Powered by <span className="text-blue">ecommurz</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default NoteApp;
