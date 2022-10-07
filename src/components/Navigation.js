import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';

function Navigation() {
  return (
    <nav>
      <Link to="/">
        <FiHome />
      </Link>
      <Link to="/add">
        <FiPlusCircle />
      </Link>
    </nav>
  );
}

export default Navigation;
