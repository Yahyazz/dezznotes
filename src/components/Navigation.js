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
      <div className="nav-group nav-icon">
        <Link to="/">
          <FiHome />
        </Link>
        <Link to="/archive">
          <FiArchive />
        </Link>
        <Link to="/notes/add">
          <FiPlusCircle />
        </Link>
      </div>
      <div className="nav-group">
        <button className="btn btn-outline hide-desktop" onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className="btn btn-outline hide-desktop" onClick={toggleLanguage}>
          <FiGlobe />
        </button>
        <button className="btn btn-delete hide-desktop" onClick={logout}>
          <FiLogOut />
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
        <button className="btn btn-delete hide-mobile" onClick={logout}>
          {name}
          <FiLogOut />
        </button>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
