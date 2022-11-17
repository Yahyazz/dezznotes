import React from 'react';
import PropTypes from 'prop-types';
import { FiFolder } from 'react-icons/fi';

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btn btn-main" onClick={() => onArchive(id)}>
      <FiFolder />
      Pindahkan
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
