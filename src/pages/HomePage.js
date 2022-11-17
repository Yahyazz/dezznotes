import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onArchiveHandler(id) {
    await archiveNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);
  }

  async function onDeleteHandler(id) {
    await deleteNote(id);

    const { data } = await getActiveNotes();
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
      <h2>Daftar Catatan Baru</h2>
      <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler} onArchive={onArchiveHandler} />
    </section>
  );
}

export default HomePage;
