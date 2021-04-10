import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Form from 'react-bootstrap/Form';

function AddNoteModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    window.onkeyup = (e) => {
        if(e.keyCode === 78) {
            setModalShow(true);
        }
    }

    const titleInputRef = React.useRef();
    const contentInputRef = React.useRef();
    const tagsInputRef = React.useRef();

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)} className="button-float-right">
                Create New Note
            </Button>

            <Modal
                onShow={() => titleInputRef.current.focus()}
                show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Note
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e) => e.preventDefault()} >
                        <Modal.Body >
                                <Form.Control type="text" placeholder="Title" className="mr-sm-2" ref={titleInputRef} /><br />
                                <Form.Control as="textarea" placeholder="Content" ref={contentInputRef} /><br/>
                                <Form.Control type="text" placeholder="Tags" className="mr-sm-2" ref={tagsInputRef} /><br/>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                            <Button type="submit" onClick={() => {
                                props.formFunction({
                                    title: titleInputRef.current.value,
                                    content: contentInputRef.current.value,
                                    tags: tagsInputRef.current.value
                                });
                                setModalShow(false);
                            }} variant="primary">Create Topic</Button>
                        </Modal.Footer>
                    </Form>
            </Modal>
        </div>
    );
}

export default AddNoteModal;