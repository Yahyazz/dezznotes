import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p className="text-center">Tidak terdapat catatan</p>
      ) : (
        notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />)
      )}
    </div>
  );
}

export default NoteList;
