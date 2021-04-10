import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import TopicView from './TopicView';

function TopicRow({ topic, updatePage }) {
    return (
        <tr>
            <td><Button className="topic-block-button" block variant="passive" onClick={() => updatePage(<TopicView topic={topic} />)}>{topic.topic}</Button></td>
            <td>{topic.description}</td>
        </tr>
    );
}

function TopicTable({ topics, updatePage }) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((x, i) => (
                        <TopicRow updatePage={updatePage} topic={x} key={'topic-'+i} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default TopicTable;