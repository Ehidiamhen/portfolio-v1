import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export default function Hero () {
    return (
        <section className="hero" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 className="txt-rotate">Hi! I’m Aigbiluese Ehidiamhen</h1>
                        {/* <h1 className="txt-rotate">{`Hi I’m Ehiz, a `}<span className="wrap">{text}</span></h1> */}
                        <p>I am a frontend developer specializing in creating modern, dynamic and responsive websites and applications. I task myself with constantly learning and staying up to date on the latest web development technologies. With a strong knowledge of core frontend languages and frameworks, I am committed to building functional and elegant user interfaces.</p>
                        <a href="https://drive.google.com/file/d/1knK5WgIVyxF5NhHD6Wx0P3IDDSSECymJ/view?usp=sharing" target='_blank'>My Resume <ArrowRightCircle size={25} /></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}