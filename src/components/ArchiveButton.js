import React from 'react';
import PropTypes from 'prop-types';

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btn btn-main" onClick={() => onArchive(id)}>
      Pindahkan
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.number.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
