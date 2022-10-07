import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteDetail({ title, createdAt, body, id, onDelete, onArchive }) {
  return (
    <div className="note-detail">
      <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
      <div className="button-group">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
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
