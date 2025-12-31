import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg';

export const ProjectNavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // 當捲動超過 50 像素時，切換為有底色的狀態
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar 
      expand="md" 
      /* 動態切換 class: 一開始是 transparent-nav，捲動後加上 scrolled */
      className={`project-navbar fixed-top ${isScrolled ? "scrolled" : "transparent-nav"}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="navbar-link">
             Main Portfolio
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}