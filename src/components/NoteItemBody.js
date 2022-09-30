import React from 'react';

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div classTitle="note-item__body">
      <h3 classTitle="note-item__title">{title}</h3>
      <p classTitle="note-item__date">{createdAt}</p>
      <p classTitle="note-item__text">{body}</p>
    </div>
  );
}

export default NoteItemBody;
