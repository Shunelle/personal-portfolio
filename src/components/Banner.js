import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toRotate = [
    "Computer Science Student",
    "Unity & Interactive Systems",
    "XR / Human-Centered Computing",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toRotate.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="banner-title">I'm Michelle Chang</h1>
                  <h2
                    key={currentIndex}
                    className="banner-subtitle animate__animated animate__fadeIn"
                  >
                    {toRotate[currentIndex]}
                  </h2>

                  <p>
                    I am a senior computer science student at National Tsing Hua
                    University, focusing on interactive systems, Unity
                    development, and human–computer interaction. I enjoy
                    building projects that combine technology, design, and
                    real-world applications.
                  </p>

                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
