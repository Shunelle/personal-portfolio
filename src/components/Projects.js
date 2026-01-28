import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CoreGrove } from "./CoreGrove";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/Locus.png";
import projImg4 from "../assets/img/Aloha.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tingle-Tennis",
      description: "VR Interaction / Game Design",
      imgUrl: projImg1,
      slug: "tingle-tennis",
    },
    {
      title: "Aidoll",
      description: "AI Integration / AWS AI Hackathon",
      imgUrl: projImg2,
      slug: "aidoll",
    },
    {
      title: "Locus",
      description: "Hardware Product / Google HPS",
      imgUrl: projImg3,
      slug: "Locus",
    },
    {
      title: "ALOHA Planet",
      description: "VR Interaction / HCI Product Dev",
      imgUrl: projImg4,
      slug: "aloha-planet",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>The Core Grove</h2>
                  <p className="max-w-2xl mx-auto text-lg leading-relaxed italic text-gray-300 opacity-90 transition-all hover:opacity-100">
                    Core Grove presents my most representative projects from the past year,
                    focusing on interactive systems driven by logic and immersive 3D experiences.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="flex-column">
                          {projects.map((project, index) => (
                            <Col
                              key={index}
                              md={12}
                              className="mb-4"
                            >
                              <div className="project-wrapper w-100">
                                <CoreGrove {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>

  )
}
