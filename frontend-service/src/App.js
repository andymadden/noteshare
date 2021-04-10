import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Topics from './pages/Topics';
import Notes from './pages/Notes';
import LoginModalButton from './pages/widgets/auth/LoginModalButton';

function App() {
  const [currentPage, setCurrentPage] = React.useState(<Topics />);
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    setCurrentPage(<Topics updatePage={(x) => setCurrentPage(x)} />);
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" expand="md" variant="dark">
        <Container>
          <Navbar.Brand href="#home">NoteShare</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={() => setCurrentPage(<Topics updatePage={setCurrentPage} />)}>Topics</Nav.Link>
              <Nav.Link onClick={() => setCurrentPage(<Notes updatePage={setCurrentPage} />)}>Notes</Nav.Link>
            </Nav>

            <LoginModalButton setAuth={setIsAuth} setToken={setToken} />
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
