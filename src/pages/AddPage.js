import React from 'react';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section>
      <h2>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
