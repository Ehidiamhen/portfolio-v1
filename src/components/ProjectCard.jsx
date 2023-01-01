import { Col } from "react-bootstrap"

import github from '../assets/img/github.svg'
import link from '../assets/img/link.svg'

export default function ProjectCard ({title, description, imgUrl, project, live}) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="proj-img" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <span className="navbar-text justify-content-center">
                        <div className="social-icon">
                          <a href={project} target='_blank'><img src={github} alt="git"/></a>
                          <a href={live} target='_blank'><img src={link} alt="link"/></a>
                        </div>
                    </span>
                </div>
            </div>
        </Col>
    )
}