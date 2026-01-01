import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CoreGrove } from "./CoreGrove";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
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
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
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
                    Deep within the digital wilderness, I have nurtured this <span className="text-emerald-400 font-semibold shadow-emerald-500/50">"Core Grove"</span>—a sanctuary for my most defining works of the past year.
                    Here, interactive experiences are brought to life through logic, and immersion is ignited by 3D environments.
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

                        {/* 第二排：其餘三個，平均 */}
                        <Row>
                          {projects.slice(1).map((project, index) => (
                            <Col md={4} sm={12} key={index}>
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
