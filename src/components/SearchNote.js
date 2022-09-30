import React from 'react';

class SearchNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    event.preventDefault();
    this.setState(() => {
      return {
        query: event.target.value,
      };
    });

    this.props.searchTitle(event.target.value);
  }

  render() {
    return (
      <form className="note-input">
        <input
          type="text"
          placeholder="Cari Judul catatanmu"
          value={this.state.query}
          onChange={this.onTitleChangeHandler}
          required
        />
      </form>
    );
  }
}

export default SearchNote;
