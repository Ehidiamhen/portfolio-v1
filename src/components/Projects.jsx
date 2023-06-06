import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import projImg1 from '../assets/img/project-img0.png'
import projImg2 from '../assets/img/project-img01.png'
import projImg3 from '../assets/img/project-img03.png'
import projImg4 from '../assets/img/project-img04.png'
import projImg6 from '../assets/img/project-img05.png'
import projImg5 from '../assets/img/project-img06.png'
import colorsharp2 from '../assets/img/color-sharp2.png'

export default function Projects () {
    const projects = [
        {        
          title: "Certificate Generator",
          description: "A web app for generating single and bulk certificates",
          imgUrl: projImg1,
          project: "https://github.com/workshopapps/certificategenerator.web",
          live: "https://certgo.app",
        },
        {
          title: "Auth Library",
          description: "A library of authentication codes for developers",
          imgUrl: projImg2,
          project: "https://github.com/zuri-training/TeamGorilla-Auth_wiki",
          live: "https://auth-wiki-leroicodes.vercel.app/",
        },
        {
          title: "Meta-bnb",
          description: "Rent a bed ’n breakfast in the metaverse",
          imgUrl: projImg3,
          project: "https://github.com/Ehidiamhen/meta-bnb",
          live: "https://meta-bnb-five.vercel.app/",
        },
        {
          title: "Periodic Table",
          description: "A web app displaying all the elements and additional information",
          imgUrl: projImg4,
          project: "https://github.com/Ehidiamhen/periodic-table",
          live: "https://periodic-chart.netlify.app",
        },
        {
          title: "React Calculator",
          description: "A simple calculator built with ReactJS",
          imgUrl: projImg5,
          project: "https://github.com/Ehidiamhen/react-calculator-app",
          live: "https://react-calculator-ehidiamhen.vercel.app/",
        },
        {
          title: "Linktree Clone",
          description: "A web app to cluster your numerous links",
          imgUrl: projImg6,
          project: "https://github.com/Ehidiamhen/linktree-contact",
          live: "https://linktree-contact.vercel.app/",
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                      <h2>Projects</h2>
                      <p>These are some of my featured projects. You can view more on my Github.</p>                      
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