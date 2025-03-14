import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import certgo from '../assets/img/projects/certgo.png'
import swiftshop from '../assets/img/projects/swiftshop.png'
import pictopdf from '../assets/img/projects/pictopdf.png'
import authwiki from '../assets/img/projects/authwiki.png'
import periodic from '../assets/img/projects/periodic.png'
import linktree from '../assets/img/projects/linktree.png'
import colorsharp2 from '../assets/img/color-sharp2.png'

export default function Projects () {
    const projects = [
        {        
          title: "Certificate Generator",
          description: "A web app for generating single and bulk certificates",
          imgUrl: certgo,
          live: "https://certgo.app",
        },
        {
          title: "SwiftShop",
          description: "E-commerce platform facilitating online purchases and delivery from local stores",
          imgUrl: swiftshop,
          live: "https://www.swiftshopworld.com/",
        },
        {
          title: "Pic to PDF",
          description: "Convert images to PDF in seconds",
          imgUrl: pictopdf,
          project: "https://github.com/Ehidiamhen/image-to-PDF",
          live: "https://pic-pdf.netlify.app/",
        },
        {
          title: "Auth Library",
          description: "A library of authentication codes for developers",
          imgUrl: authwiki,
          project: "https://github.com/zuri-training/TeamGorilla-Auth_wiki",
          live: "https://auth-wiki-leroicodes.vercel.app/",
        },
        {
          title: "Periodic Table",
          description: "A web app displaying all the elements and additional information",
          imgUrl: periodic,
          project: "https://github.com/Ehidiamhen/periodic-table",
          live: "https://periodic-chart.netlify.app",
        },
        {
          title: "Linktree Clone",
          description: "A web app to cluster my links",
          imgUrl: linktree,
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