import { Container, Row, Col } from "react-bootstrap"

import html5 from '../assets/img/html-5.svg'
import css3 from '../assets/img/css3.svg'
import tailwind from '../assets/img/tailwindcss.svg'
import sass from '../assets/img/sass.svg'
import js from '../assets/img/meter1.svg'
import python from '../assets/img/python.svg'
import ReactSVG  from '../assets/img/react.svg'
import git from '../assets/img/git.svg'
import cypress from '../assets/img/cypress.svg'
import colorSharp from '../assets/img/color-sharp.png'

export default function Skills () {
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                      <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni quisquam, iste quaerat laudantium officiis odio deserunt magnam sed architecto necessitatibus cupiditate earum. Vitae inventore exercitationem iusto delectus eos aliquid?</p>
                        <div className="skill-imgs">
                            <div className="item">
                                <img src={html5} alt="skill-img" title="HTML"/>
                            </div>
                            <div className="item">
                                <img src={css3} alt="skill-img" title="CSS"/>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="skill-img" title="Tailwind"/>
                            </div>
                            <div className="item">
                                <img src={sass} alt="skill-img" title="Sass"/>
                            </div>
                            <div className="item">
                                <img src={js} alt="skill-img" title="Javascript"/>
                            </div>
                            <div className="item">
                                <img src={python} alt="skill-img" title="Python"/>
                            </div>
                            <div className="item">
                                <img src={ReactSVG} alt="skill-img" title="React"/>
                            </div>
                            <div className="item">
                                <img src={git} alt="skill-img" title="Git"/>
                            </div>
                            <div className="item">
                                <img src={cypress} alt="skill-img" title="Cypress"/>
                            </div>
                        </div>
                      </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="skill-bg-img" />
        </section>
    )
}