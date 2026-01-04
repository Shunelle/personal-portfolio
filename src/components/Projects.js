import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CoreGrove } from "./CoreGrove";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/Locus.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tingle-Tennis",
      description: "VR Interaction / Game Design",
      imgUrl: projImg1,
      slug: "tingle-tennis", // 新增這個
    },
    {
      title: "Aidoll",
      description: "AI Integration / HCI Product Dev",
      imgUrl: projImg2,
      slug: "aidoll", // 新增這個
    },
    {
      title: "Locus",
      description: "Hardware Product / Google HPS",
      imgUrl: projImg3,
      slug: "Locus", // 新增這個
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
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
                        {/* 第一排：Tingle Tennis */}
                        <Row className="mb-4">
                          <Col md={12}>
                            <CoreGrove {...projects[0]} />
                          </Col>
                        </Row>


                        <Row className="d-flex align-items-stretch">
                          {projects.slice(1).map((project, index) => (
                            <Col md={6} sm={12} key={index} className="mb-4 d-flex">
                              <CoreGrove {...project} />
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
