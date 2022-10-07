import React from 'react';
import NoteDetail from '../components/NoteDetail';
import { getDetailNote } from '../utils/data';
import { useParams } from 'react-router-dom';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getDetailNote(props.id),
    };
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
