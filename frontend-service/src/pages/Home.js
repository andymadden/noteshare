import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import AddNoteModal from './widgets/notes/AddNoteModal';
import RecentTopicTable from './widgets/topics/TopicTable';

function Home() {
    return (
        <div>
            <h3>Recent Topics</h3>
            <RecentTopicTable />
        </div>
    );
}

export default Home;