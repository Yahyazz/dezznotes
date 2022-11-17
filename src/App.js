import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="note-app">
        <header className="header">
          <h1 className="text-blue">dezznotes.</h1>
        </header>
        <main>
          <Routes>
            <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
            <Route path="/register" element={<RegisterPage />} />
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

  return (
    <div className="note-app">
      <header className="header">
        <h1 className="text-blue">dezznotes.</h1>
        <Navigation logout={onLogout} name={authedUser.name} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
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
