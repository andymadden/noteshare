import React from 'react';
import Table from 'react-bootstrap/Table';

function RecentTopicTable() {
    const [recentTopics, setRecentTopics] = React.useState([
        {topic: "Gaming", noteCount: 345},
        {topic: "Being Cool", noteCount: 0},
    ]);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Note Count</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTopics.map((x) => (
                        <tr>
                            <td>{x.topic}</td>
                            <td>{x.noteCount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default RecentTopicTable;