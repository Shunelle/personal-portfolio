import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./AIdoll.css";

import AIdollHeroFull from "../assets/img/AIdollMichelle.png";
import AIdollimg from "../assets/img/AIdoll.png";
import AIdollDesign from "../assets/img/AIdollDesign.png";
import FlowChartImg from "../assets/img/AIdollFlowChart.png";
import AIdollTechFlowimg from "../assets/img/AIdollTechFlow.png";


export const AIdoll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="aidoll-page-container">

            {/* ===== Section 01: Hero ===== */}
            <section id="section1" className="project-detail-hero-section">
                <div className="hero-image-wrapper">
                    <img src={AIdollHeroFull} alt="AIdoll Hero Michelle" />
                    <div className="hero-gradient-overlay"></div>

                    <div className="hero-text-overlay">
                        <Container>
                            <Row>
                                <Col lg={6} md={8}>
                                    <TrackVisibility>
                                        {({ isVisible }) => (
                                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                                <span className="tagline-hero">
                                                    AWS AI Wave: Taiwan Generative AI Applications Hackathon
                                                    <br />
                                                    Taipei, Taiwan · April 2025 · 1st Place
                                                </span>
                                                <h1 className="hero-title">
                                                    <span className="pink-text">AIdoll</span>
                                                </h1>
                                                <h2 className="hero-subtitle">
                                                    A smart companion that brings your favorite idol to life
                                                </h2>
                                            </div>
                                        )}
                                    </TrackVisibility>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* ===== Section 02: Ideation & Problem Definition ===== */}
            <section id="section2" className="aidoll-concept-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5} md={12} className="mb-4">
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                        <div className="concept-image-wrapper">
                                            <img src={AIdollimg} alt="AIdoll Concept" className="concept-image" />
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                        <Col lg={7} md={12}>
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                                        <h2 className="description-number">01</h2>
                                        <h3 className="description-title">
                                            <span className="concept-highlight">Ideation</span> · Problem Definition
                                        </h3>

                                        <div className="description-body">
                                            <h4 className="concept-subtitle">Background & Motivation</h4>
                                            <ul className="concept-list">
                                                <li>Most existing virtual idol interactions remain largely one-directional, lacking natural dialogue and emotional reciprocity.</li>
                                                <li>How might we enable fans to truly feel that their idol is <strong>emotionally present and supportive</strong>?</li>
                                            </ul>

                                            <h4 className="concept-subtitle">User Insight</h4>
                                            <ul className="concept-list">
                                                <li>Fans’ emotional attachment to idols is not fully satisfied by current products.</li>
                                                <li>An idol’s voice and visual presence possess strong emotional and therapeutic potential.</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== Section 03: User Research & Persona ===== */}
            <section id="section3" className="aidoll-persona-section">
                <Container>
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <h2 className="description-number">02</h2>
                                <h3 className="description-title">User Research · <span className="concept-highlight">Persona</span></h3>

                                <div className="persona-table-wrapper mt-4">
                                    <table className="persona-table">
                                        <thead>
                                            <tr>
                                                <th>Persona</th>
                                                <th>Pain Points</th>
                                                <th>Preferences</th>
                                                <th>Key Needs</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="persona-name">Super Fan</td>
                                                <td>Fear of mechanical, emotionless AI voice interactions.</td>
                                                <td>Voice must resemble the idol with natural intonation.</td>
                                                <td>Chibi avatars, fan-created elements.</td>
                                            </tr>
                                            <tr>
                                                <td className="persona-name">Distant Admirer</td>
                                                <td>Finds overly enthusiastic AI awkward or overwhelming.</td>
                                                <td>Prefers simple greetings and maintaining personality.</td>
                                                <td>"Sense of Distance" design, situational playbacks.</td>
                                            </tr>
                                            <tr>
                                                <td className="persona-name">Figure Collector</td>
                                                <td>Aesthetics are priority; complex AI logic can be a turn-off.</td>
                                                <td>Exquisite physical appearance and swappable accessories.</td>
                                                <td>Intuitive controls and keyword-triggered responses.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* ===== Section 04: Our Goal (Goal Strip) ===== */}
            <section id="section4" className="aidoll-goal-strip">
                <Container fluid className="px-0">
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={`goal-content-wrapper ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                                <div className="goal-text-container">
                                    <span className="description-number">03</span>
                                    <h3 className="goal-label">Our Goal</h3>
                                    <div className="goal-divider"></div>
                                    <p className="goal-statement">
                                        Create your <strong>exclusive idol avatar</strong> and let
                                        <strong> companionship</strong> enter every day.
                                    </p>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* ===== Section 05: System Architecture & Design Flow ===== */}
            <section id="section5" className="aidoll-flow-section">
                <Container>
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <div className="section-header mb-5">
                                    <h2 className="description-number">04</h2>
                                    <h3 className="description-title">System Architecture & Interaction Flow</h3>
                                </div>

                                {/* 大圖容器與文字疊加 */}
                                <div className="flow-chart-container justify-content-center">
                                    <img
                                        src={AIdollDesign} /* 這裡建議替換成你的架構圖或流程圖大圖 */
                                        alt="Design Chart"
                                        className="flow-main-img"
                                    />
                                    <div className="flow-overlay-text">
                                        <h4 className="overlay-brand">AIDOL</h4>
                                        <p className="overlay-slogan">Bring Your Idol to Life</p>
                                    </div>
                                </div>
                                {/* 第二 Row：左邊文字說明，右邊系統架構圖 */}
                                <Row className="align-items-center mt-5">
                                    <Col lg={5} md={12}>
                                        <div className="interaction-text-box">
                                            <h4 className="feature-group-title">Seamless Interaction Flow</h4>
                                            <ul className="concept-list">
                                                <li><strong>User Initiation</strong>: Handled via manual toggle or voice wake-word activation to ensure privacy and control.</li>
                                                <li><strong>Intelligent Processing</strong>: Requests are sent through the smartphone app to AWS cloud services.</li>
                                                <li><strong>Cloud Synergy</strong>: AWS IoT Core and generative AI services process intent, emotion, and context.</li>
                                                <li><strong>Real-time Feedback</strong>: The AIdoll device responds with authentic vocal timbre and situational expressions.</li>
                                                <li><strong>Security & Identity</strong>: All interactions are secured and personalized via AWS Cognito login.</li>
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col lg={7} md={12}>
                                        <div className="architecture-img-wrapper">
                                            <img
                                                src={FlowChartImg} /* 確保路徑指向你上傳的架構圖 */
                                                alt="System Architecture Diagram"
                                                className="architecture-diagram"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* ===== Section 06: Core Feature Demos (Three-Column Grid) ===== */}
            <section className="aidoll-demo-section">
                <Container>
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <div className="section-header mb-5">
                                    <h3 className="description-title">Core Feature Demos</h3>
                                </div>

                                <Row className="justify-content-center">
                                    {/* Demo 01: 日常拍照與聊天 */}
                                    <Col lg={4} md={6} className="mb-4">
                                        <div className="demo-card">
                                            <div className="video-responsive">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/io_2T5xbpqg?si=8cCZLZowBvTxysvk"  /* ✨ 請替換為你的 YouTube 連結 ✨ */
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Daily Photo & Chat Demo"
                                                ></iframe>
                                            </div>
                                            <div className="demo-description">
                                                <h4 className="demo-title">Daily Photo & Chat</h4>
                                                <p className="demo-text">Engage in natural conversations and capture special moments together.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Demo 02: 歷史對話的記憶功能 */}
                                    <Col lg={4} md={6} className="mb-4">
                                        <div className="demo-card">
                                            <div className="video-responsive">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/M8kYcQ2mrQ4?si=WVdxl8z3g8ApFdAl"  /* ✨ 請替換為你的 YouTube 連結 ✨ */
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Memory Function Demo"
                                                ></iframe>
                                            </div>
                                            <div className="demo-description">
                                                <h4 className="demo-title">Conversational Memory</h4>
                                                <p className="demo-text">AIdoll remembers past interactions for a more personalized experience.</p>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Demo 03: 專屬偶像活動提醒 */}
                                    <Col lg={4} md={6} className="mb-4">
                                        <div className="demo-card">
                                            <div className="video-responsive">
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/DtxL4CuElL4?si=GIUXnXzYMixBKv4R"/* ✨ 請替換為你的 YouTube 連結 ✨ */
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Idol Event Reminder Demo"
                                                ></iframe>
                                            </div>
                                            <div className="demo-description">
                                                <h4 className="demo-title">Exclusive Event Reminders</h4>
                                                <p className="demo-text">Get timely updates and personalized reminders for idol-related activities.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col lg={12}>
                                        <div className="extra-features-strip">
                                            <div className="extra-content">
                                                <span className="extra-tag">Enhancements & Live Optimization</span>
                                                <p className="extra-statement">
                                                    We also developed features such as <strong>Personalized Nicknames</strong> and <strong>Shutdown Reminders</strong> to encourage re-engagement.
                                                    Due to <strong>network interference</strong> during the competition, we implemented an <strong>"I didn't quite catch that"</strong> voice prompt to handle latency and ensure a smooth user experience.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* ===== Section 08: Deep Dive into Technical Architecture ===== */}
            <section id="section6" className="aidoll-tech-section">
                {/* 標題部分保留 Container 讓文字對齊 */}
                <Container className="mt-5">
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <Row className="mb-4">
                                    <Col lg={12}>
                                        <h2 className="description-number">05</h2>
                                        <h3 className="description-title">Technical Deep Dive</h3>
                                        <p className="concept-list" style={{ fontSize: "1.1rem", maxWidth: "900px" }}>
                                            Our system utilizes <strong>Raspberry Pi</strong> as the hardware brain,
                                            integrating camera, speaker, and microphone sensors. Through <strong>AWS IoT Core</strong>,
                                            it connects to a powerful backend featuring <strong>AWS Bedrock</strong> for generative AI,
                                            <strong>Lambda</strong> for serverless logic, and <strong>AWS Poly</strong> for natural voice synthesis.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>

                {/* 圖片部分使用 Container-fluid 突破寬度限制 */}
                <Container fluid className="px-md-5">
                    <Row>
                        <Col lg={12}>
                            <div className="full-architecture-wrapper">
                                <img
                                    src={AIdollTechFlowimg}
                                    alt="Detailed Technical Architecture"
                                    className="full-architecture-img"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
};