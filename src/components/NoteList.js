import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
import TranslateContext from '../contexts/TranslateContext';

function NoteList({ notes, onDelete, onArchive }) {
  const { language } = useContext(TranslateContext);

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <div className="h-full">
          <p className="text-center">
            {language === 'id' ? 'Tidak terdapat catatan' : 'There are no notes'}
          </p>
          <button className="btn btn-outline">
            <Link to="/notes/add">
              {language === 'id' ? 'Buat catatan baru' : 'Create new notes'}
            </Link>
          </button>
        </div>
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
