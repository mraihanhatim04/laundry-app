import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logout Success");
  };

  const handleDeleteClick = () => {
    confirmAlert({
      title: "Confirm to Logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleLogout(),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <>
      <Navbar
        className="py-3 fixed-top"
        bg="primary"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/src/assets/logo.png"
              width="50"
              height="40"
              className="d-inline-block align-top me-2"
              alt="Enigma Laundry Logo"
            />{" "}
            Enigma Laundry
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="navmenu">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Nav className="">
              {isAuth ? (
                <Button variant="danger" onClick={handleDeleteClick}>
                  Logout
                </Button>
              ) : (
                <Link to={"/login"} className="btn btn-danger">
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
