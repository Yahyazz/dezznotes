import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TranslateContext from '../contexts/TranslateContext';

function PageNotFound() {
  const { language } = useContext(TranslateContext);
  return (
    <div className="h-full">
      <p className="text-center">
        <span className="text-blue">404!</span> <br />
        {language === 'id'
          ? 'Maaf, halaman ini tidak tersedia.'
          : "Sorry, this page isn't available."}
      </p>
      <button className="btn btn-outline">
        <Link to="/">{language === 'id' ? 'Kembali ke dezznotes' : 'Go back to dezznotes'}</Link>
      </button>
    </div>
  );
}

export default PageNotFound;
