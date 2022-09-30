import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';
import SearchNote from './SearchNote';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onSearchHandler(query) {
    this.setState(() => {
      return {
        query: query,
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.query.toLowerCase())
    );

    const archivedNotes = notes.filter((note) => note.archived === true);
    const unArchivedNotes = notes.filter((note) => note.archived === false);

    return (
      <div className="note-app">
        <h1 className="header">Notes App</h1>
        <h2>Tambah Catatan</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Daftar Catatan</h2>
        <SearchNote searchTitle={this.onSearchHandler} />
        <h2>Catatan Baru</h2>
        <NoteList
          notes={unArchivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h2>Arsip Catatan</h2>
        <NoteList
          notes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
