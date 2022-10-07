import React from 'react';
import { showFormattedDate } from '../utils/data';
import PropTypes from 'prop-types';

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__text">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
