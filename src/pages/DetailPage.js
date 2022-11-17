import React, { useEffect, useState } from 'react';
import NoteDetail from '../components/NoteDetail';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setInitializing(false);
    });
  }, [id]);

  if (initializing) {
    return <section className="h-full"></section>;
  }

  if (note === null) {
    return <PageNotFound />;
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate('/');
  }

  async function onArchiveHandler(id) {
    await archiveNote(id);
    navigate('/');
  }

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);
    navigate('/archive');
  }

  async function buttonHandler(id) {
    if (note.archived === true) {
      await onUnarchiveHandler(id);
    } else {
      await onArchiveHandler(id);
    }
  }

  return (
    <section>
      <NoteDetail {...note} onDelete={onDeleteHandler} onArchive={buttonHandler} />
    </section>
  );
}

export default DetailPage;
