import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const ExtraExperience = () => {
  const experiences = [
    { title: "NTHU Cheerleading Team Captain", detail: "1st Place in Taiwan Championships 2022" },
    { title: "Nepal International Volunteer", detail: "Sustainable Development & English Education" },
    { title: "Microsoft Campus Ambassador", detail: "Tech Community Building & STEM Promotion" }
  ];

  return (
    <section className="extra-experience py-5" style={{ background: '#000' }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontSize: '36px', fontWeight: '700' }}>Extra Experience</h2>
        <Row className="justify-content-center">
          {experiences.map((exp, index) => (
            <Col md={4} key={index} className="text-center mb-4">
              <div className="px-3" style={{ borderLeft: '1px solid #00ffaa' }}>
                <h5 style={{ color: '#00ffaa', fontWeight: '700' }}>{exp.title}</h5>
                <p style={{ fontSize: '14px', color: '#B8B8B8' }}>{exp.detail}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}