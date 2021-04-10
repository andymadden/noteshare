import React from 'react';
import Table from 'react-bootstrap/Table';

function NoteRow(props) {
    return (
        <tr>
            <td>{props.note.title}</td>
            <td>{props.note.content}</td>
        </tr>
    );
}

function NoteTable(props) {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {props.notes.map((x, i) => (
                        <NoteRow updatePage={props.updatePage} note={x} key={'note-'+i} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default NoteTable;