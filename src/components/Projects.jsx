import { Container, Row, Col } from "react-bootstrap"
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
                    </Col>
                </Row>
            </Container>
            <img src={colorsharp2} alt="proj-bg-img" className="background-image-right" />
        </section>
    )
}