import React, { useContext } from 'react';
import { FiGlobe } from 'react-icons/fi';
import TranslateContext from '../contexts/TranslateContext';

function NavigationMode() {
  const { language, toggleLanguage } = useContext(TranslateContext);

  return (
    <nav>
      <button className="btn btn-outline" onClick={toggleLanguage}>
        <FiGlobe />
        {language === 'id' ? 'English' : 'Indonesia'}
      </button>
    </nav>
  );
}

export default NavigationMode;
