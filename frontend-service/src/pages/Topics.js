import React from 'react';
import TopicTable from './widgets/topics/TopicTable';
import CreateTopicModal from './widgets/topics/CreateTopicModal';
import Container from 'react-bootstrap/esm/Container';

function Topics({ updatePage }) {
    const [topics, setTopics] = React.useState([]);

    const fetchTopics = () => {
        fetch('http://localhost:5000/api/topics').then(d => d.json()).then(r => setTopics(r));
    }

    React.useEffect(() => {
        fetchTopics();
    }, []);

    return (
        <div>
            <Container>
                <h2 style={{'float': 'left'}}>Topics</h2>
                <CreateTopicModal formFunction={(topic) => {
                    fetch('http://localhost:5000/api/topics', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(topic)
                    });
                    topic.id = topics.length > 0 ? topics[topics.length-1].id+1 : 1;
                    setTopics(topics.concat([topic]));
                }} updateTopics={fetchTopics}/>
            </Container>
            <TopicTable topics={topics} updatePage={updatePage} />
        </div>
    );
}

export default Topics;