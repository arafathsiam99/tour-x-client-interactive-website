import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = UseAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className="img-fluid">
            <img src="https://i.ibb.co/xh3Nd89/download.png" alt="" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <NavLink className="custom-link" to="/home">
                Home
              </NavLink>

              {user?.email && (
                <NavLink className="custom-link" to="/myorders">
                  My Orders
                </NavLink>
              )}

              {user?.email && (
                <NavLink className="custom-link" to="/addpackage">
                  Add A New Package
                </NavLink>
              )}
              {user?.email && (
                <NavLink className="custom-link" to="/manageallpackage">
                  Manage All Package
                </NavLink>
              )}

              {!user?.email ? (
                <NavLink className="custom-link" to="/login">
                  Login
                </NavLink>
              ) : (
                <button className="custom-btn" onClick={handleLogOut}>
                  Logout
                </button>
              )}
              <Navbar.Text className="custom-text">
                {user.displayName}
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
