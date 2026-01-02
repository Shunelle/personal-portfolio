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
import demoImg1 from "../assets/img/Aidoll-demo-startup.png";
import demoImg2 from "../assets/img/Aidoll-demo-memory.png";
import demoImg3 from "../assets/img/Aidoll-demo-event.png";
import AIdollFinal from "../assets/img/AIdollFinal.png";

export const AIdoll = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="aidoll-page-container">
            {/* ===== Section 01: Banner ===== */}
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
                                                <h2 className="hero-subtitle">A smart companion that brings your favorite idol to life</h2>
                                            </div>
                                        )}
                                    </TrackVisibility>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            {/* ===== Section 02: Project Discreption ===== */}
            <section id="section2" className="aidoll-concept-section">
                <Container>
                    <Row className="align-items-center">

                        {/* Left: Project Description */}
                        <Col lg={7} md={12} className="mb-4">
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeInLeft"
                                                : ""
                                        }
                                    >
                                        <h2 className="description-number">01</h2>
                                        <h3 className="description-title">
                                            Project Description
                                        </h3>

                                        <div className="description-body mt-4">
                                            <p className="description-text">
                                                During a software innovation AI competition, our team stood out as the
                                                <strong> only group that challenged the integration of AI with a
                                                    physical embodiment</strong>.
                                            </p>

                                            <p className="description-text">
                                                In collaboration with industry partners <strong>Vyin AI</strong> and
                                                <strong> Gamania</strong>, and by leveraging a voice API provided by an
                                                idol agency, we developed an <strong>intelligent virtual idol doll</strong>
                                                under intense time constraints.
                                            </p>

                                            <p className="description-text">
                                                The system enables <strong>interactive companionship</strong>,
                                                allowing users to communicate with the idol at any time, creating an
                                                experience that feels as if the idol is truly present by their side.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                        {/* Right: Concept Image */}
                        <Col lg={5} md={12} className="mb-4">
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeInRight"
                                                : ""
                                        }
                                    >
                                        <div className="concept-image-wrapper">
                                            <img
                                                src={AIdollimg}
                                                alt="AIdoll Concept"
                                                className="concept-image"
                                            />
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                    </Row>
                </Container>
            </section>

            {/* Section 3 */}
            <section id="section3" className="aidoll-persona-section">
                <Container>

                    {/* ===== Block 01: Ideation & Problem Definition ===== */}
                    <Row className="align-items-center mb-5">
                        <Col lg={12}>
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeInUp"
                                                : ""
                                        }
                                    >
                                        <h2 className="description-number">02</h2>
                                        <h3 className="description-title">
                                            <span className="concept-highlight">Ideation</span> · Problem Definition
                                        </h3>

                                        <div className="description-body mt-4">
                                            <h4 className="concept-subtitle">
                                                Background & Motivation
                                            </h4>
                                            <ul className="concept-list">
                                                <li>
                                                    Most existing virtual idol interactions remain largely
                                                    one-directional, lacking natural dialogue and emotional
                                                    reciprocity.
                                                </li>
                                                <li>
                                                    How might we enable fans to truly feel that their idol is{" "}
                                                    <strong>emotionally present and supportive</strong>?
                                                </li>
                                            </ul>

                                            <h4 className="concept-subtitle mt-4">
                                                User Insight
                                            </h4>
                                            <ul className="concept-list">
                                                <li>
                                                    Fans’ emotional attachment to idols is not fully satisfied by
                                                    current products.
                                                </li>
                                                <li>
                                                    An idol’s voice and visual presence possess strong emotional
                                                    and therapeutic potential.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>

                    {/* ===== Block 02: User Research & Persona ===== */}
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeInUp"
                                                : ""
                                        }
                                    >
                                        <h2 className="description-number">03</h2>
                                        <h3 className="description-title">
                                            User Research ·{" "}
                                            <span className="concept-highlight">Persona</span>
                                        </h3>

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
                                                        <td className="persona-name">
                                                            Super Fan
                                                        </td>
                                                        <td>
                                                            Fear of mechanical, emotionless AI voice interactions.
                                                        </td>
                                                        <td>
                                                            Voice must resemble the idol with natural intonation.
                                                        </td>
                                                        <td>
                                                            Chibi avatars, fan-created elements.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="persona-name">
                                                            Distant Admirer
                                                        </td>
                                                        <td>
                                                            Finds overly enthusiastic AI awkward or overwhelming.
                                                        </td>
                                                        <td>
                                                            Prefers simple greetings and maintaining personality.
                                                        </td>
                                                        <td>
                                                            “Sense of Distance” design, situational playbacks.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="persona-name">
                                                            Figure Collector
                                                        </td>
                                                        <td>
                                                            Aesthetics are priority; complex AI logic can be a turn-off.
                                                        </td>
                                                        <td>
                                                            Exquisite physical appearance and swappable accessories.
                                                        </td>
                                                        <td>
                                                            Intuitive controls and keyword-triggered responses.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>

                </Container>
            </section>


            {/* ===== Section 03: Our Goal (Goal Strip) ===== */}
            <section id="section4" className="aidoll-goal-strip">
                <Container fluid className="px-0">
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={`goal-content-wrapper ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                                <div className="goal-text-container">
                                    <span className="description-number">04</span>
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
                                    <h2 className="description-number">05</h2>
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
                                    <h2 className="description-number">06</h2>
                                    <h3 className="description-title">Core Feature Demos</h3>
                                </div>
                                <Row className="mt-5 mb-5">
                                    <div className="demo-card">
                                        <div className="video-responsive">
                                            <iframe
                                                src="https://www.youtube.com/embed/0XnpBBA981M?si=s66a9wDUuZ0kXazu"
                                                title="Demo Video"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <div className="demo-description">
                                            <h4 className="demo-title">Demo Title Three</h4>
                                            <p className="demo-text">
                                                After signing in, users can interact with AIdoll, which responds naturally using the idol’s authentic original voice.
                                            </p>
                                        </div>
                                    </div>
                                </Row>


                                <Row className="justify-content-center">
                                    {/* Demo 01: Personalized Startup Greeting */}
                                    <Col lg={4} md={6} className="mb-4">
                                        <div className="demo-card">
                                            <div className="video-responsive">
                                                <img
                                                    src={demoImg1}
                                                    alt="Personalized Startup Greeting"
                                                    className="demo-image"
                                                />
                                            </div>
                                            <div className="demo-description">
                                                <h4 className="demo-title">Personalized Startup Greeting</h4>
                                                <p className="demo-text">
                                                    Upon system startup, AIdoll authenticates users through <strong>AWS Cognito</strong> and retrieves stored user data to deliver a personalized greeting. By recalling
                                                    previous interactions, the system immediately establishes familiarity and emotional
                                                    continuity.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* Demo 02: Persistent Conversational Memory */}
                                    <Col lg={4} md={6} className="mb-4">
                                        <div className="demo-card">
                                            <div className="video-responsive">
                                                <img
                                                    src={demoImg2}
                                                    alt="Persistent Conversational Memory"
                                                    className="demo-image"
                                                />
                                            </div>
                                            <div className="demo-description">
                                                <h4 className="demo-title">Persistent Conversational Memory</h4>
                                                <p className="demo-text">
                                                    To ensure continuous and context-aware dialogue, conversation histories are stored
                                                    as text files in <strong>AWS S3</strong>. This design allows AIdoll to reference past
                                                    interactions across sessions, enabling more coherent and personalized conversations.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    {/* Demo 03: Idol Event & Schedule Reminder */}
                                    <Col lg={4} md={6} className="mb-4">
                                        <div className="demo-card">
                                            <div className="video-responsive">
                                                <img
                                                    src={demoImg3}
                                                    alt="Idol Event and Schedule Reminder"
                                                    className="demo-image"
                                                />
                                            </div>
                                            <div className="demo-description">
                                                <h4 className="demo-title">Idol Event & Schedule Reminder</h4>
                                                <p className="demo-text">
                                                    Designed for future collaboration with talent agencies, this feature enables
                                                    official idol event announcements to be distributed through the platform.
                                                    AIdoll proactively notifies users of upcoming activities, strengthening
                                                    trust and fan–idol engagement.
                                                </p>
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
                                        <h2 className="description-number">07</h2>
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
            {/* ===== Final Section: Visual Showcase ===== */}
            <section id="section-final" className="aidoll-final-full-section">
                <div className="final-image-container">
                    <img
                        src={AIdollFinal}
                        alt="Final Presentation at AWS AI Wave"
                        className="final-full-image"
                    />

                    {/* 下方漸層遮罩 */}
                    <div className="final-bottom-gradient"></div>

                    {/* 左側文字 */}
                    <div className="final-text-overlay">
                        <div className="final-text-content">
                            <span className="final-tag">Final Presentation</span>
                            <h2 className="final-title">
                                AWS AI Wave: Taiwan Generative AI Applications Hackathon
                            </h2>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
};