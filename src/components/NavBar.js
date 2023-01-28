import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import profile from "../images/prof.jpg";
import { Link } from "react-router-dom";

import React from "react";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Berts Wearhouse</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"}> Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/Api"}>Api</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/Products"}>Products</Link>
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <img src={profile} alt="profile" className="nav-profile-picture" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
