import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiPlusCircle, FiArchive, FiGlobe, FiSun, FiMoon } from 'react-icons/fi';
import TranslateContext from '../contexts/TranslateContext';
import ThemeContext from '../contexts/ThemeContext';

function Navigation({ logout, name }) {
  const { language, toggleLanguage } = useContext(TranslateContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <Link to="/">
        <FiHome />
      </Link>
      <Link to="/archive">
        <FiArchive />
      </Link>
      <Link to="/notes/add">
        <FiPlusCircle />
      </Link>
      <button className="btn btn-outline" onClick={toggleTheme}>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <button className="btn btn-outline" onClick={toggleLanguage}>
        <FiGlobe />
        {language === 'id' ? 'English' : 'Indonesia'}
      </button>
      <button className="btn btn-delete" onClick={logout}>
        {name}
        <FiLogOut />
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
