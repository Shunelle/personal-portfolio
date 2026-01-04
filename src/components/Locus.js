import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./Locus.css";
import LocusHeroFull from "../assets/img/Locus-banner.png";
import LocusImg from "../assets/img/Locus.png";
import LocusUserFlowImg from "../assets/img/Locus-userflow.png";
import LocusUIflowImg from "../assets/img/Locus-UIflow.png";
import LocusChallengeImg from "../assets/img/Locus-challenge.png";
import LocusFinal from "../assets/img/Locus-final.png";
import LocusHardwareComponentsImg from "../assets/img/Locus-HardwareComponentsImg.png";
import demoImg1 from "../assets/img/Aidoll-demo-startup.png";


export const Locus = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const colors = {
        blue: "#4285F4",
        red: "#EA4335",
        yellow: "#FBBC05",
        green: "#34A853"
    };

    return (
        <div className="locus-page-container">
            {/* ===== Section 01: Banner (同 AI doll 邏輯) ===== */}
            {/* Section 01: Banner */}
            <section id="section1" className="project-detail-hero-section">
                <div className="hero-image-wrapper-locus">
                    <img src={LocusHeroFull} alt="Locus Google Hardware Sprint" />
                    <div className="hero-gradient-overlay"></div>

                    <div className="hero-text-overlay">
                        <Container>
                            {/* 使用 justify-content-center 讓 Row 內容水平置中 */}
                            <Row className="justify-content-center">
                                <Col lg={10} md={12} className="text-center"> {/* text-center 讓內部文字置中 */}
                                    <TrackVisibility>
                                        {({ isVisible }) => (
                                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                                <span className="tagline-hero">
                                                    Google Hardware Product Sprint 2023
                                                    <br />
                                                    Mentored by Google Hardware Engineers
                                                </span>

                                                {/* 彩色置中標題 */}
                                                <h1 className="hero-title locus-colorful-title">
                                                    <span className="g-blue">L</span>
                                                    <span className="g-red">O</span>
                                                    <span className="g-yellow">C</span>
                                                    <span className="g-green">U</span>
                                                    <span className="g-blue">S</span>
                                                </h1>

                                                <h2 className="hero-subtitle-locus">
                                                    "Mom said that Lock your phone to be focused."
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

            {/* ===== Section 02: Project Description ===== */}
            <section id="section2" className="locus-concept-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={7} md={12} className="mb-4">
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                        <h2 className="description-number" style={{ color: colors.blue }}>01</h2>
                                        <h3 className="description-title">Project Description</h3>
                                        <div className="description-body mt-4">
                                            <p className="description-text">
                                                In an era where technology constantly distracts us, staying present has become a challenge. To address this, we developed <strong>LOCUS</strong>—an innovative hardware solution designed to help users regain their focus.
                                            </p>
                                            <p className="description-text">
                                                LOCUS is a smart physical vault that <strong>secures your smartphone</strong> while providing immersive <strong>ambient lighting, background music, and aromatherapy</strong> tailored for concentration.
                                            </p>
                                            <p className="description-text">
                                                The system is operated via <strong>hand-gesture recognition</strong>, ensuring a touchless and seamless experience. To add a playful yet effective layer of discipline, any attempt to retrieve the phone prematurely results in a <strong>water-spraying penalty</strong>.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                        <Col lg={5} md={12} className="mb-4 text-center">
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                                        <div className="concept-image-wrapper border-blue">
                                            <img src={LocusImg} alt="Locus Device" className="concept-image" />
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== Section 03: Motivation (使用 Persona 類似的表格式或條列式) ===== */}
            <section id="section3" className="locus-motivation-section">
                <Container>
                    <Row className="align-items-center mb-5">
                        <Col lg={12}>
                            <TrackVisibility partialVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        <h2 className="description-number" style={{ color: colors.red }}>02</h2>
                                        <h3 className="description-title-locus">Motivation & Insight</h3>
                                        <div className="description-body-locus mt-4">
                                            <h4 className="concept-subtitle-locus">The Software Limitation</h4>
                                            <p className="description-text">
                                                Existing productivity tools are mostly software-based apps. However, these often <strong>lack physical compulsion</strong> and <strong>tangible interaction</strong>, making them easy to ignore or bypass.
                                            </p>
                                            <h4 className="concept-subtitle-locus mt-4">Hardware as a Solution</h4>
                                            <ul className="concept-list">
                                                <li><strong>Physical Boundary:</strong> Creating a "sacred space" for work by physically separating the user from their device.</li>
                                                <li><strong>Interactive Feedback:</strong> Using multi-sensory feedback (light, sound, and even water) to reinforce focus habits.</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===== Section 04: Goal Strip ===== */}
            <section id="section4" className="aidoll-goal-strip"> {/* 延用 AIdoll 的 Class 保持一致 */}
                <Container fluid className="px-0">
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={`goal-content-wrapper ${isVisible ? "animate__animated animate__fadeIn" : ""}`} style={{ backgroundColor: colors.yellow }}>
                                <div className="goal-text-container">
                                    <span className="description-number" style={{ color: "#000" }}>03</span>
                                    <h3 className="goal-label" style={{ color: "#000" }}>Our Mission</h3>
                                    <div className="goal-divider" style={{ backgroundColor: "#000" }}></div>
                                    <p className="goal-statement" style={{ color: "#000" }}>
                                        To transform passive restraint into an engaging ritual for deep focus.
                                    </p>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* ===== Section 05: Design ===== */}
            <section id="section5" className="locus-flow-section">
                <Container>
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                {/* 標題部分 */}
                                <div className="section-header mb-5">
                                    <h2 className="description-number" style={{ color: colors.green }}>04</h2>
                                    <h3 className="description-title">Interaction Design</h3>
                                </div>

                                {/* 第一排：左邊 User Flow, 右邊 UI Flow */}
                                <Row className="mb-5 text-center">
                                    <Col md={12} className="mb-4">
                                        <div className="flow-sub-card">
                                            <h4 className="flow-subtitle mb-3" style={{ color: colors.blue }}>User Flow</h4>
                                            <div className="flow-img-wrapper">
                                                <img src={LocusUserFlowImg} alt="User Flow" className="img-fluid rounded-shadow" />
                                                {!LocusUserFlowImg && <div className="placeholder-img">User Flow Diagram</div>}
                                            </div>
                                        </div>
                                    </Col>

                                </Row>

                                {/* 第二排：原本的文字說明與硬體/系統圖 */}
                                <Row className="align-items-center mt-5">
                                    <Col>
                                        <div className="interaction-text-box">
                                            <h4 className="feature-group-title">The Interaction Cycle</h4>
                                            <ul className="concept-list">
                                                <li><strong>Step 1:</strong> Gesture-activated lid opens; user places phone inside.</li>
                                                <li><strong>Step 2:</strong> System locks and initiates "Concentration Mode" (ASMR + Warm Light).</li>
                                                <li><strong>Step 3:</strong> Real-time monitoring via sensors.</li>
                                                <li><strong>Step 4:</strong> Punishment mechanism (Water spray) triggers if the lock is tampered with.</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mb-4">
                                        <div className="flow-sub-card">
                                            <h4 className="flow-subtitle mb-3" style={{ color: colors.red }}>UI Flow</h4>
                                            <div className="flow-img-wrapper">
                                                <img src={LocusUIflowImg} alt="UI Flow" className="img-fluid rounded-shadow" />
                                                {!LocusUIflowImg && <div className="placeholder-img">UI Flow Diagram</div>}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* ===== Section 05: Hardware ===== */}
            <section id="section6" className="locus-hardware-section"> {/* 修改 class 名稱，讓 CSS 更明確 */}
                <Container>
                    <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                {/* 標題部分 */}
                                <div className="section-header mb-5">
                                    <h2 className="description-number" style={{ color: colors.green }}>05</h2>
                                    <h3 className="description-title">Hardware Design & Implementation</h3>
                                </div>

                                {/* ===== 第一排：左邊文字說明，右邊硬體元件圖 ===== */}
                                <Row className="align-items-center mb-5">
                                    <Col lg={6} md={12} className="mb-4">
                                        <div className="text-content-box">
                                            <h4 className="feature-group-title" style={{ color: colors.green }}>Prototype Fabrication & Features</h4>
                                            <ul className="concept-list">
                                                <li>
                                                    <strong>3D-Printed Enclosure:</strong>
                                                    The device casing was custom-designed and fabricated using 3D printing technology, ensuring precise housing for all internal mechanisms.
                                                </li>
                                                <li>
                                                    <strong>Hydraulic Penalty System:</strong>
                                                    An integrated water pump and tubing system delivers the "water spray" penalty, designed for immediate and tactile feedback.
                                                </li>
                                                <li>
                                                    <strong>Aromatherapy Atomizer:</strong>
                                                    An ultrasonic atomizer is positioned at the top, capable of diffusing essential oils for ambient aromatherapy, enhancing focus or relaxation.
                                                </li>
                                                <li>
                                                    <strong>Dynamic LED Lighting:</strong>
                                                    An addressable LED light strip at the base provides customizable ambient illumination, cycling through colors that align with various user-selected focus modes.
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={12} className="mb-4">
                                        <div className="hardware-diagram-wrapper">
                                            <img
                                                src={LocusHardwareComponentsImg}
                                                alt="Hardware Components Overview"
                                                className="img-fluid rounded-shadow"
                                            />
                                            {!LocusHardwareComponentsImg && (
                                                <div className="placeholder-img" style={{ border: `2px dashed ${colors.yellow}`, height: '400px' }}>
                                                    [Hardware Components Overview]
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                </Row>

                                {/* ===== 第二排：左邊 3D 設計圖影片，右邊額外說明文字 ===== */}
                                <Row className="align-items-center mt-5">
                                    <Col lg={6} md={12} className="mb-4">
                                        <div className="video-responsive rounded-shadow">
                                            <iframe
                                                /* 1. 核心參數：autoplay=1 (自動播放), mute=1 (靜音), loop=1 (循環), playlist=(循環必備) */
                                                src="https://www.youtube.com/embed/h8IOJAEggmE?autoplay=1&mute=1&loop=1&playlist=h8IOJAEggmE&playsinline=1&rel=0&controls=0"
                                                title="3D Locus Showcase"
                                                frameBorder="0"
                                                /* 2. 權限設定：必須包含 autoplay 屬性 */
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>
                                            </iframe>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} className="mb-4">
                                        <div className="text-content-box">
                                            <h4 className="feature-group-title" style={{ color: colors.blue }}>Design Philosophy & Integration</h4>
                                            <p className="description-text">
                                                Our hardware design prioritizes both <strong>minimalist aesthetics</strong> and <strong>functional integration</strong>. Every component, from the precise fit of the 3D-printed shell to the concealed wiring of the pump system, was meticulously planned to ensure durability and ease of assembly.
                                            </p>
                                            <p className="description-text">
                                                The modular approach allows for future upgrades and customization, reflecting a user-centric design philosophy learned directly from our Google mentors.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                {/* Challenge Image Section */}
                                <Row className="mt-5 pt-4">
                                    <Col lg={12}>
                                        {/* 1. 標題區：獨立出來，不再使用 absolute */}
                                        <div className="challenge-header-area mb-4">
                                            <span className="number-tag-standalone">06</span>
                                            <h3 className="tag-text-standalone">Challenges & Issues</h3>
                                        </div>

                                        {/* 2. 圖片區：透過 margin 調整與標題的距離 */}
                                        <div className="challenge-img-wrapper" style={{ marginTop: "40px" }}>
                                            <img
                                                src={LocusChallengeImg}
                                                alt="Hardware Challenge"
                                                className="img-fluid rounded-shadow challenge-main-img"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* ===== Final Section: Visual Showcase ===== */}
            <section id="section7" className="aidoll-final-full-section">
                <div className="final-image-container">
                    <img
                        src={LocusFinal}
                        alt="Google Hardware Product Sprint 2023"
                        className="final-full-image"
                    />

                    {/* 下方漸層遮罩 */}
                    <div className="final-bottom-gradient"></div>

                    {/* 左側文字 */}
                    <div className="final-text-overlay">
                        <div className="final-text-content">

                            <h2 className="description-number" style={{ color: colors.blue }}>07</h2>
                            <h3 className="video-full-title-bottom">Final Presentation</h3>
                            <p className="video-subtext-locus">
                                Presented by: Justin Huang, Alex Huang, Tim Cheng, and Michael Chou
                            </p>
                            <p className="video-subtext-locus">
                                Mentored by: Joseph Ku
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};