import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiFolder } from 'react-icons/fi';
import TranslateContext from '../contexts/TranslateContext';

function ArchiveButton({ id, onArchive }) {
  const { language } = useContext(TranslateContext);

  return (
    <button className="btn btn-main" onClick={() => onArchive(id)}>
      <FiFolder />
      {language === 'id' ? 'Pindahkan' : 'Move Note'}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
