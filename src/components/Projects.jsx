import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorsharp2 from '../assets/img/color-sharp2.png'

export default function Projects () {
    const projects = [
        {        
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
          project: "https://github.com",
          live: "https://google.com",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
          project: "https://github.com",
          live: "https://google.com",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
          project: "https://github.com",
          live: "https://google.com",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
          project: "https://github.com",
          live: "https://google.com",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
          project: "https://github.com",
          live: "https://google.com",
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
          project: "https://github.com",
          live: "https://google.com",
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                      <h2>Projects</h2>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis hic deserunt culpa repudiandae aut voluptate ullam magnam? Iste facere esse neque, inventore blanditiis dolorem eligendi possimus deserunt rerum mollitia.</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                          </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                              key={index}
                                              {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                      </Tab.Content>
                      </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorsharp2} alt="proj-bg-img" className="background-image-right" />
        </section>
    )
}