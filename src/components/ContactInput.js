import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
    };

    this.onNameChangeHandler = this.onNameChangeHandler.bind(this);
    this.onTagChangeHandler = this.onTagChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChangeHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onTagChangeHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitHandler}>
        <input
          type="text"
          placeholder="Nama"
          value={this.state.name}
          onChange={this.onNameChangeHandler}
          required
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangeHandler}
          required
        />
        <button type="submit" className="btn">
          Tambah Kontak
        </button>
      </form>
    );
  }
}

export default ContactInput;
