import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from 'react';

function CreateTopicModal({ formFunction, updateTopics }) {
    const [modalShow, setModalShow] = React.useState(false);

    window.onkeyup = (e) => {
        if(e.keyCode === 78) {
            setModalShow(true);
        }
    }

    const titleInputRef = React.useRef();
    const descriptionInputRef = React.useRef();
    const tagsInputRef = React.useRef();

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)} className="button-float-right">
                Create New Topic
            </Button>

            <Modal onShow={() => titleInputRef.current.focus()}
                show={modalShow} size="md" aria-labelledby="contained-modal-title-vcenter"
                onHide={() => setModalShow(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create New Topic
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        updateTopics();
                    }} >
                        <Modal.Body >
                                <Form.Control type="text" placeholder="Title" className="mr-sm-2" ref={titleInputRef} /><br />
                                <Form.Control as="textarea" placeholder="Description" ref={descriptionInputRef} /><br/>
                                <Form.Control type="text" placeholder="Tags" className="mr-sm-2" ref={tagsInputRef} /><br/>
                        </Modal.Body>
                        <Modal.Footer >
                            <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                            <Button type="submit" onClick={() => {
                                const note = {
                                    topic: titleInputRef.current.value,
                                    description: descriptionInputRef.current.value,
                                    tags: tagsInputRef.current.value
                                };
                                formFunction(note);
                                setModalShow(false);
                            }} variant="primary">Create Topic</Button>
                        </Modal.Footer>
                    </Form>
            </Modal>
        </div>
    );
}

export default CreateTopicModal;