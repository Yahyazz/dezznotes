import React from 'react';

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="btn btn-main" onClick={() => onArchive(id)}>
      Pindahkan
    </button>
  );
}

export default ArchiveButton;
