import React from 'react';

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
    this.setState(() => {
      return {
        title: event.target.value,
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
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          required
        />
        <textarea
          type="textarea"
          placeholder="Catatanmu"
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

export default NoteInput;
