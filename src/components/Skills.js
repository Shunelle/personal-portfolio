import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Skills = () => {
  // 從你的履歷分類並扁平化這些技能 

  const skills = [
    // --- 你原本列出的 ---
    { name: "Python" }, { name: "Unity (C#)" }, 
    { name: "TouchDesigner" },    // 多媒體設計工具 [cite: 92]
    { name: "3D Printing" },      // Real-Cam 專案製作 [cite: 24, 92]
    { name: "Blender" }, 
    { name: "Arduino" }, 
    { name: "Raspberry Pi" },     
    { name: "C/C++/C#" }, { name: "AWS" },  { name: "Figma" },
    { name: "React" }, 
    // { name: "FPGA (Vivado)" },       
    { name: "ROS2" },                      
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="skill-bx-grid animate__animated animate__fadeIn">
              <h2>Planting Skillset</h2>
              <Row className="justify-content-center g-4">
                {skills.map((skill, index) => (
                  <Col xs={6} md={4} lg={2} key={index} className="d-flex justify-content-center">
                    <div className="skill-grid-item">
                      <div className="icon-placeholder">
                        {/* 未來放圖片的地方 */}
                        <div className="glow-orb"></div>
                      </div>
                      <h5>{skill.name}</h5>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};