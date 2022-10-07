import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getDetailNote, deleteNote, archiveNote } from '../utils/data';
import { useParams, useNavigate } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const note = getDetailNote(Number(id));
  const navigate = useNavigate();

  if (note === null) {
    return (
      <div className="h-full">
        <p className="text-center">Note is not found!</p>
      </div>
    );
  }

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate('/');
  }

  function onArchiveHandler(id) {
    archiveNote(id);
    navigate('/');
  }

  return (
    <section>
      <NoteDetail {...note} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
    </section>
  );
}

export default DetailPage;
