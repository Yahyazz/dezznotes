import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/network-data';
import TranslateContext from '../contexts/TranslateContext';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });
  const { language } = useContext(TranslateContext);

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onUnarchiveHandler(id) {
    await unarchiveNote(id);

    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section>
      <h2>{language === 'id' ? 'Daftar Arsip Catatan' : 'Archived Notes'}</h2>
      <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onUnarchiveHandler} />
    </section>
  );
}

export default ArchivePage;
