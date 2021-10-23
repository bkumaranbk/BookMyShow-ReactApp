import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <div>
            <Navbar bg="bg-back" expand="lg" variant="dark" style={{ backgroundColor: "rgb(51, 53, 69)" }}>
                <Container>
                    <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/register">
                                    User Registration
                                </NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid style={{ background: "rgb(34, 37, 57)", color: "white", padding: "10px" }}>
                <a>First Option</a>
                <a>Second Option</a>
            </Container>
        </div>
    );
}

export default Header;
