import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const limit = 50;

    this.setState(() => {
      return {
        title: event.target.value.slice(0, limit),
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return { title: '', body: '' };
    });
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <p className="text-right">Sisa karakter judul: {50 - this.state.title.length}</p>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          required
        />
        <textarea
          type="textarea"
          placeholder="Catatanmu..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
          spellCheck="false"
          required
        ></textarea>
        <button type="submit" className="btn btn-main">
          Tambah Catatan
        </button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
