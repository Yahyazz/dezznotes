import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="text-center text-blue h-full">Tidak terdapat catatan</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;
