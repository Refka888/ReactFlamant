import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  MDBBtn,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from "mdb-react-ui-kit";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to={"/"}>
              Flamant
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/inscription"}>
                  Inscription
                </Nav.Link>

                <Nav.Link as={Link} to={"/connexion"}>
                  Connexion
                </Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <form className="d-flex input-group ms-5 ">
                <input
                  type="search"
                  className="form-control"
                  placeholder=""
                  aria-label="Search"
                />
                <MDBBtn className="text-muted" color="info">
                  Search
                </MDBBtn>
              </form>
              <MDBNavbarNav className="d-flex flex-row-reverse">
                <MDBNavbarItem>
                  <MDBNavbarLink as={Link} to={"/Panier"}>
                    Panier
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="Svgnavbar"
                    >
                      <path d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z" />
                    </svg>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
