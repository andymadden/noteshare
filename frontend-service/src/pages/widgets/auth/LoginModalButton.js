import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/Form';

function LoginModalButton({ setAuth }) {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <div>
            <Button variant="secondary" onClick={() => setShowModal(true)}>Login</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="md"
                aria-labelledby="contained-modal-title" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Log Into NoteShare
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Modal.Body>
                            <Form.Group>
                                <Form.Label >Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label >Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" variant="primary">Login</Button>
                        </Modal.Footer>
                    </Form>
            </Modal>
        </div>
    )
}

export default LoginModalButton;