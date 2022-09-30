import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note-item__body">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__text">{body}</p>
    </div>
  );
}

export default NoteItemBody;
