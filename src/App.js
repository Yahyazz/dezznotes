import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import NavigationMode from './components/NavigationMode';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import TranslateContext from './contexts/TranslateContext';

function NoteApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [language, setLanguage] = useState('id');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      return prevLanguage === 'id' ? 'en' : 'id';
    });
  };

  const languageContextValue = React.useMemo(() => {
    return {
      language,
      toggleLanguage,
    };
  }, [language]);

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
      <TranslateContext.Provider value={languageContextValue}>
        <div className="note-app">
          <header className="header">
            <h1 className="text-blue">dezznotes.</h1>
            <NavigationMode />
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
      </TranslateContext.Provider>
    );
  }

  return (
    <TranslateContext.Provider value={languageContextValue}>
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
    </TranslateContext.Provider>
  );
}

export default NoteApp;
