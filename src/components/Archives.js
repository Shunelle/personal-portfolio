import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import 'animate.css';
import archive1 from "../assets/img/archive1.png";

export const Archives = () => {
  const [activeId, setActiveId] = useState(null);

  const otherProjects = [
    { 
      title: "Real-Cam", 
      subtitle: "Physical PTZ Device for Immersive Sports",
      desc: "Designed a VR camera system integrating Unity, IoT sensors, and a 3D-printed PTZ device with electronic components and joystick control to simulate camera movement for immersive sports recording.", 
      tags: ["Unity", "IoT", "3D Printing"] 
    },
    { 
      title: "PerformaVis", 
      subtitle: "Affective Music Visualization System",
      desc: "Contributed to developing a real-time affective visualization system in Unity, analyzing pianists' expressive movements to reflect emotional dynamics through visual output. Featured in UIST '25.", 
      tags: ["Unity", "Media Art", "UIST '25"] 
    },
    { 
      title: "Tingle Tennis", 
      subtitle: "Menstrual Experience Sensory Simulation",
      desc: "VR tennis game integrating haptic feedback and IoT sensors to simulate menstrual experiences for empathy education. Presented at SIGGRAPH Asia.", 
      tags: ["VR", "IoT", "Unity"] 
    },
    { 
      title: "Robotic Navigation", 
      subtitle: "ROS2-based Exploration & Perception",
      desc: "Built ROS2-based navigation with YOLO gesture recognition, implementing algorithms like A*, Dijkstra, and RRT* for real-time tracking and pathfinding.", 
      tags: ["ROS2", "Python", "YOLO"] 
    },
    { 
      title: "Wallistic", 
      subtitle: "Full-stack Wallpaper Editing Application",
      desc: "Developed a wallpaper editing mobile application from user study to React Native implementation, covering both frontend and backend development.", 
      tags: ["React Native", "UX Research"] 
    }
  ];

  return (
    <section className="archive" id="archive">
      <Container>
        {/* 使用 justify-content-center 讓整個區塊水平置中 */}
        <Row className="justify-content-center">
          <Col lg={10} xl={9}>
            <div className="archive-bx text-center">
              <h2 className="animate__animated animate__fadeInDown">The Archive</h2>
              <p className="archive-intro-text">
                A curated vault of technical explorations, hardware prototypes, and digital experiments.
              </p>
              
              <div className="archive-list-enhanced mt-5 text-start">
                {otherProjects.map((project, index) => (
                  <div key={index} className={`archive-item-wrap ${activeId === index ? "active" : ""}`}>
                    <div className="archive-row-trigger" onClick={() => setActiveId(activeId === index ? null : index)}>
                      <Row className="align-items-center">
                        {/* 左側長方形圖片 */}
                        <Col xs={12} md={4} lg={4}>
                          <div className="archive-img-container rect-mode">
                            <img src={archive1} alt="project" className="archive-rect-img" />
                          </div>
                        </Col>
                        
                        {/* 文字資訊 */}
                        <Col xs={10} md={7} lg={7}>
                          <div className="archive-info">
                            <h4 className="archive-main-title">{project.title}</h4>
                            <h6 className="archive-subtitle">{project.subtitle}</h6>
                            <div className="archive-tags-row d-none d-md-flex">
                              {project.tags.map((tag, i) => (
                                <span key={i} className="tag-pill">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </Col>

                        {/* 展開箭頭 */}
                        <Col xs={2} md={1} className="text-end">
                          <ChevronDown className={`archive-chevron ${activeId === index ? "rotate" : ""}`} />
                        </Col>
                      </Row>
                    </div>

                    {/* 展開後的內容 */}
                    <div className="archive-details-expand">
                      <div className="details-inner-content">
                        <div className="content-divider"></div>
                        <p className="details-text">{project.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}