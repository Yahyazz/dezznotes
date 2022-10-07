import React from 'react';
import PropTypes from 'prop-types';

function SearchNote({ keyword, keywordChange }) {
  return (
    <div className="note-input">
      <input
        type="text"
        placeholder="Cari Judul catatanmu"
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
