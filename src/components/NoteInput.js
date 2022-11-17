import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TranslateContext from '../contexts/TranslateContext';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { language } = useContext(TranslateContext);

  function onTitleChangeHandler(event) {
    const limit = 50;

    setTitle(event.target.value.slice(0, limit));
  }

  function onBodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    addNote({ title, body });
    setTitle('');
    setBody('');
  }

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <p className="text-right">
        {language === 'id' ? 'Sisa karakter judul: ' : 'Title characters left: '}
        {50 - title.length}
      </p>
      <input
        type="text"
        placeholder={language === 'id' ? 'Judul' : 'Title'}
        value={title}
        onChange={onTitleChangeHandler}
        required
      />
      <textarea
        type="textarea"
        placeholder={language === 'id' ? 'Catatanmu ...' : 'Your notes ...'}
        value={body}
        onChange={onBodyChangeHandler}
        spellCheck="false"
        required
      ></textarea>
      <button type="submit" className="btn btn-main">
        {language === 'id' ? 'Buat Catatan' : 'Create Notes'}
      </button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
