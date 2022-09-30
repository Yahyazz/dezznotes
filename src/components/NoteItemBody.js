import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div classTitle="note-item__body">
      <h3 classTitle="note-item__title">{title}</h3>
      <p classTitle="note-item__date">{showFormattedDate(createdAt)}</p>
      <p classTitle="note-item__text">{body}</p>
    </div>
  );
}

export default NoteItemBody;
