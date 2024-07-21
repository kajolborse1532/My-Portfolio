import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.JPG";
import projImg2 from "../assets/img/p11.JPG";
import projImg3 from "../assets/img/p2.JPG";
import projImg4 from "../assets/img/p22.JPG";
import projImg5 from "../assets/img/p3.png";
import projImg6 from "../assets/img/p33.png";
import colorSharp2 from "../assets/img/color-sharp2.png"; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

  const projects = [
    {
      title: "Food Hub Website",
      description: "HTLM, CSS, JS",
      imgUrl: projImg1,

    },
    {
      title: "Coaching Classes Website",
      description: "react, Spring-Boot, Mysql",
      imgUrl: projImg3,
      
    },
    {
      title: " Quiz Application",
      description: "HTLM, CSS, JS",
      imgUrl: projImg5,
    },
    {
      title: "Food Hub Website",
      description: "HTLM, CSS, JS",
      imgUrl: projImg2,
    },
    {
      title: " Coaching Classes Website",
      description: "react, Spring-Boot, Mysql",
      imgUrl: projImg4,
    },
    {
      title: "Quiz Application",
      description: "HTLM, CSS, JS",
      imgUrl: projImg6,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
                    <Tab.Pane eventKey="second">
                      <p>Project is a showcase of skills that you have learned </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
