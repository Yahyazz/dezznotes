import React from 'react';
import { showFormattedDate } from '../utils/data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemBody({ id, title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <Link to={`/notes/detail/${id}`} className="note-item__title">
        {title}
      </Link>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__text">{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
