import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

// import logo from '../assets/img/logo.svg'
import headerImg from "../assets/img/header-img.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export default function NavBar () {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const handleExpand = () => {
        let expanded = document.getElementById("navbar-toggler").getAttribute("aria-expanded");
        expanded == "false" ? expanded = "true" : expanded = "false"
        document.getElementById("navbar-toggler").setAttribute("aria-expanded", expanded);
    }

    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={headerImg} alt="logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" aria-expanded="false" onClick={handleExpand} id="navbar-toggler">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/ehidiamhen/" target='_blank'><img src={navIcon1} alt="nav1"/></a>
                    <a href="https://www.facebook.com/profile.php?id=100073186998169" target='_blank'><img src={navIcon2} alt="nav2"/></a>
                    <a href="https://www.instagram.com/aigbilueseehidiamhen/" target='_blank'><img src={navIcon3} alt="nav3"/></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}