import React, { useContext } from 'react';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import TranslateContext from '../contexts/TranslateContext';

function AddPage() {
  const navigate = useNavigate();
  const { language } = useContext(TranslateContext);

  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <section>
      <h2>{language === 'id' ? 'Buat Catatan Baru' : 'Create New Note'}</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
