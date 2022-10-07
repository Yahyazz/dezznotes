import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getDetailNote, deleteNote, archiveNote } from '../utils/data';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function DetailPage() {
  const { id } = useParams();
  const note = getDetailNote(id);
  const navigate = useNavigate();

  if (note === null) {
    return <PageNotFound />;
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
