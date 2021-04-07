import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Home from './pages/Home';
import Topics from './pages/Topics';
import Notes from './pages/Notes';

function App() {
  const [currentPage, setCurrentPage] = React.useState(<Home />);

  return (
    <div className="App">
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NoteShare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => setCurrentPage(<Home />)}>Home</Nav.Link>
              <Nav.Link onClick={() => setCurrentPage(<Topics />)}>Topics</Nav.Link>
              <Nav.Link onClick={() => setCurrentPage(<Notes />)}>Notes</Nav.Link>
            </Nav>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container id="app-container">
        {currentPage}
      </Container>
    </div>
  );
}

export default App;
