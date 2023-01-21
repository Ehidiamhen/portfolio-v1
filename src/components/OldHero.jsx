import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export default function OldHero () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Programmer", "Software Engineer", "Frontend Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        };

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        };
    };

    return (
        <section className="hero" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 className="txt-rotate">{`Hi I’m Ehiz, a `}<span className="wrap">{text}</span></h1>
                        <p>I am a frontend developer specializing in creating modern, dynamic and responsive websites and applications. I task myself with constantly learning and staying up to date on the latest web development technologies. With a strong knowledge of core frontend languages and frameworks, I am committed to building functional and elegant user interfaces.</p>
                        <a href="#connect">Let’s Connect <ArrowRightCircle size={25} /></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}