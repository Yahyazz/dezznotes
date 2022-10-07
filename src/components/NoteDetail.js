import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';

function NoteDetail({ title, createdAt, body, id }) {
  return (
    <div className="note-item note-detail">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default NoteDetail;
