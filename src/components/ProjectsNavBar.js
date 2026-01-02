import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg';

export const ProjectsNavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // 點擊平滑捲動邏輯
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // 扣除 Navbar 高度
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // 導覽文字清單
    const navLinks = [
        { id: "section1", title: "Overview" },
        { id: "section2", title: "Intro" },
        { id: "section3", title: "Study" },
        { id: "section4", title: "Goal" },
        { id: "section5", title: "Design" },
        { id: "section6", title: "Hardware" },
        { id: "section7", title: "Presentation" },
    ];

    return (
        <Navbar
            expand="lg"
            className={`project-navbar fixed-top ${isScrolled ? "scrolled" : "transparent-nav"}`}
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="Logo" className="nav-logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navLinks.map((link) => (
                            <Nav.Link
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="project-nav-link"
                            >
                                {link.title}
                            </Nav.Link>
                        ))}

                        <Nav.Link as={Link} to="/" className="project-nav-link main-portfolio-btn">
                            Return to Portfolio
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}