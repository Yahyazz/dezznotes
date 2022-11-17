import React, { useContext } from 'react';
import { FiGlobe, FiMoon, FiSun } from 'react-icons/fi';
import TranslateContext from '../contexts/TranslateContext';
import ThemeContext from '../contexts/ThemeContext';

function NavigationMode() {
  const { language, toggleLanguage } = useContext(TranslateContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav-mode">
      <div className="nav-group">
        <button className="btn btn-outline hide-desktop" onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className="btn btn-outline hide-desktop" onClick={toggleLanguage}>
          <FiGlobe />
        </button>
      </div>
      <div className="nav-group">
        <button className="btn btn-outline hide-mobile" onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
          {theme === 'light' ? 'Dark' : 'Light'}
        </button>
        <button className="btn btn-outline hide-mobile" onClick={toggleLanguage}>
          <FiGlobe />
          {language === 'id' ? 'English' : 'Indonesia'}
        </button>
      </div>
    </nav>
  );
}

export default NavigationMode;
