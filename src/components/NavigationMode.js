import React, { useContext } from 'react';
import { FiGlobe, FiMoon, FiSun } from 'react-icons/fi';
import TranslateContext from '../contexts/TranslateContext';
import ThemeContext from '../contexts/ThemeContext';

function NavigationMode() {
  const { language, toggleLanguage } = useContext(TranslateContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <button className="btn btn-outline" onClick={toggleTheme}>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <button className="btn btn-outline" onClick={toggleLanguage}>
        <FiGlobe />
        {language === 'id' ? 'English' : 'Indonesia'}
      </button>
    </nav>
  );
}

export default NavigationMode;
