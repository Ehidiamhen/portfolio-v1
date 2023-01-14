import { Container, Row, Col } from "react-bootstrap"

import logo from "../assets/img/logo.png"
import navIcon1 from '../assets/img/github.svg'
import navIcon2 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/twitter.svg'

export default function Footer () {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                          <a href="https://www.github.com/ehidiamhen/" target='_blank'><img src={navIcon1} alt="nav1"/></a>
                          <a href="https://www.linkedin.com/in/ehidiamhen/" target='_blank'><img src={navIcon2} alt="nav2"/></a>
                          <a href="https://twitter.com/ehis_eleazar" target='_blank'><img src={navIcon3} alt="nav3"/></a>
                        </div>
                        <p>Copyright {year}. By Ehidiamhen</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}