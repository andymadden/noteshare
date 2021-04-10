import React from 'react';
import AddNoteModal from '../notes/AddNoteModal';
import Container from 'react-bootstrap/Container';
import NoteTable from '../notes/NoteTable';

function TopicView({ topic }) {
    const [notes, setNotes] = React.useState([]);

    const fetchNotes = () => {
        fetch('http://localhost:5000/api/topics/'+topic.id+'/notes').then(d => d.json()).then(r => setNotes(r));
    }

    React.useEffect(() => {
        fetch('http://localhost:5000/api/topics/'+topic.id+'/notes').then(d => d.json()).then(r => setNotes(r));
    }, [topic]);

    return (
        <div>
            <Container>
                <h2 style={{'float': 'left'}}>{topic.topic}</h2>
                <AddNoteModal formFunction={(note) => {
                    fetch('http://localhost:5000/api/topics/'+topic.id+'/notes', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(note)
                    });
                    setNotes(notes.concat([note]));
                }} updateNotes={fetchNotes} />
            </Container>
            <NoteTable notes={notes} />
        </div>
    );
}

export default TopicView;