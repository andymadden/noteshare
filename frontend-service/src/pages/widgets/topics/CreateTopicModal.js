import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function CreateTopicModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Create New Topic
            </Button>

            <Modal
                show={modalShow} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Create New Topic
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Create New Topic</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setModalShow(false)} variant="secondary">Close</Button>
                        <Button onClick={() => console.log('Save')} variant="primary">Create Topic</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateTopicModal;