import React from 'react';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="btn btn-delete" onClick={() => onDelete(id)}>
      Hapus Catatan
    </button>
  );
}

export default DeleteButton;
