import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';
import TranslateContext from '../contexts/TranslateContext';

function DeleteButton({ id, onDelete }) {
  const { language } = useContext(TranslateContext);

  return (
    <button className="btn btn-delete" onClick={() => onDelete(id)}>
      <FiDelete />
      {language === 'id' ? 'Hapus Catatan' : 'Delete Note'}
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
