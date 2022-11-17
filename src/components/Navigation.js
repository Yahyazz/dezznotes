import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiPlusCircle, FiArchive } from 'react-icons/fi';

function Navigation({ logout, name }) {
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
