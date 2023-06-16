import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from "../../assets/whole.png";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { Modal } from "react-responsive-modal";
import LoginModal from "./LoginModal";
const Header = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <Navbar expand="lg" className="d-sm-block d-none">
      <Container fluid>
        <Navbar.Brand href="#" className="logo">
          <img src={logo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex search-bar">
            <FaSearch className="search-icon" />
            <Form.Control
              type="search"
              placeholder="Search for your favorite groups in ATG"
              className=" search-input "
              aria-label="Search"
            />
          </Form>
          <Nav
            className="me-2 my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a
              href="#"
              onClick={() => setDropdownActive(!dropdownActive)}
              className="dropdown-toggle  nav-acount text-decoration-none"
            >
              
                  Create account <span>Its free!</span>
                  {dropdownActive && (
                    <ul className="dropdown-menu show top-100">
                      <li className="dropdown-item">
                        <span className="signupbtn" onClick={onOpenModal}>
                          Log In
                        </span>
                      </li>
                      <li className="dropdown-item">
                        <span  className="signupbtn" onClick={onOpenModal}>
                          Register
                        </span>
                      </li>
                    </ul>
                  )}
                
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal open={open} onClose={onCloseModal} center>
        <LoginModal />
      </Modal>
    </Navbar>
  );
};

export default Header;
