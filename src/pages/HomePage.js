import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchNote from '../components/SearchNote';
import { getNotes, deleteNote, archiveNote } from '../utils/data';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onArchiveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getNotes(),
      };
    });
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        notes: getNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    const archivedNotes = notes.filter((note) => note.archived === true);
    const unArchivedNotes = notes.filter((note) => note.archived === false);

    return (
      <section>
        <h2>Daftar Catatan</h2>
        <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
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
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
