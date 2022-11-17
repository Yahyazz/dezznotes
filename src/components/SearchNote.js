import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TranslateContext from '../contexts/TranslateContext';

function SearchNote({ keyword, keywordChange }) {
  const { language } = useContext(TranslateContext);

  return (
    <div className="note-input">
      <input
        type="text"
        placeholder={language === 'id' ? 'Cari catatanmu ...' : 'Search notes ...'}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
}

SearchNote.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchNote;
