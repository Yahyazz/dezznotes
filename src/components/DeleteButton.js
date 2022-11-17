import React from 'react';
import PropTypes from 'prop-types';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn btn-delete" onClick={() => onDelete(id)}>
      <FiDelete />
      Hapus Catatan
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
