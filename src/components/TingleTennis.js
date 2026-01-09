import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import 'animate.css';
import './TingleTennis.css';

// 圖片路徑
import tingleHeroFull from "../assets/img/court.png";
import flowChartImg from "../assets/img/flow-chart.png";
import factorMap from "../assets/img/factor-map.png";
import roomImg from "../assets/img/room.png";
import floatingPersonImg from "../assets/img/wu.png";
import hardware1 from "../assets/img/hardware1.png";
import hardware2 from "../assets/img/hardware2.png";
import itemEffectImg from "../assets/img/item-effect.png";


export const TingleTennis = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tingle-page-container">
            {/* Section 1: Hero (保持不變) */}
            <section id="section1" className="project-detail-hero-section">
                <div className="hero-image-wrapper">
                    <img src={tingleHeroFull} alt="Tingle Tennis Court" />
                    <div className="T-hero-gradient-overlay"></div>
                    <div className="T-hero-text-overlay">
                        <Container>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        <span className="T-tagline-hero">SIGGRAPH Asia 2024</span>
                                        <h1 className="hero-title">
                                            <span className="pink-text">Tingle</span>{" "}
                                            <span className="teal-text">Tennis</span>
                                        </h1>
                                        <h2 className="T-hero-subtitle">Menstrual Experience Sensory Simulation Sport Device</h2>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Container>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section id="section2" className="project-description-room-bg">
                {/* 漂浮人物：直接放在 section 內，用絕對定位控制在右側 */}
                <div className="floating-person-absolute">
                    <img src={floatingPersonImg} alt="User Interaction" className="person-img" />
                </div>

                <Container>
                    <Row>
                        <Col lg={6} md={8}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                        <h2 className="description-number">01</h2>
                                        <h3 className="description-title">Project Description</h3>
                                        <div className="description-body">
                                            <p className="description-text">
                                                <strong>Tingle Tennis</strong> is an innovative VR sports simulation designed to foster
                                                empathy regarding the physiological challenges of menstruation.
                                            </p>
                                            <p className="description-text">
                                                By integrating <strong>Unity VR</strong> with <strong>TENS</strong> hardware,
                                                the system recreates the physical sensations of menstrual cramps in real-time.
                                                This project bridges the gap between digital interaction and bodily experience.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section 3 */}
            <section section id="section3" className="tingle-study-section">
                <Container>
                    <Row>
                        {/* 左半邊：02 Motivation + 03 User Study 文字說明 */}
                        <Col lg={5} md={12}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                        <div className="sub-section">
                                            <h2 className="description-number">02</h2>
                                            <h3 className="description-title">Motivation</h3>
                                            <p className="description-text">
                                                While serving as a university cheerleading captain, I suffered a severe elbow fracture that required surgery after I pushed through intense menstrual pain in silence. This grueling recovery led me to realize how cultural taboos in Asia often pressure female athletes to hide their discomfort. Inspired by the #SayPeriod movement, I aimed to transform this silence into understanding. This journey led to the creation of 'Tingle Tennis'—a VR sports game designed to foster empathy and bridge communication gaps across genders and cultures through an inclusive, technology-mediated environment.
                                            </p>
                                        </div>

                                        <div className="sub-section mt-5">
                                            <h2 className="description-number">03</h2>
                                            <h3 className="description-title">User Study</h3>
                                            <p className="description-text">
                                                We conducted user studies with both trained athletes and non-athletes, and we interviewed Taiwanese writer Wu Xiaole, known for her work on parenting and education, whose insights shaped our approach to designing more authentic embodied simulations.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                        {/* 右半邊：兩個表格上下排列 */}
                        <Col lg={7} md={12}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>

                                        {/* 上方表格：User Story 邏輯 */}
                                        <div className="user-story-table-wrapper mb-4">
                                            <h4 className="table-header">User Story Strategy</h4>
                                            <div className="table-responsive">
                                                <table className="user-logic-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Target User</th>
                                                            <th>Goal</th>
                                                            <th>Reason</th>
                                                            <th>Why VR?</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Males lacking first hand experience; sports coaches</td>
                                                            <td>Break social taboos; provide educational empathy platform</td>
                                                            <td>Biological differences; individual variation in pain intensity</td>
                                                            <td>Simulates social challenges; immersive somatic education</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        {/* 下方表格：Item-Consequence (從圖片轉換) */}
                                        <div className="journey-map-wrapper">
                                            <h4 className="table-header">User Journey Map</h4>
                                            <div className="table-responsive">
                                                <table className="journey-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Phases</th>
                                                            <th>Awareness</th>
                                                            <th>Interest</th>
                                                            <th>Decision</th>
                                                            <th>Experience</th>
                                                            <th>Advocacy</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="row-label">Actions</td>
                                                            <td>Find info on menstrual health; study gender equality</td>
                                                            <td>Search for VR related to menstrual experience</td>
                                                            <td>Decide whether to trial/purchase based on reviews</td>
                                                            <td>Carry out the simulation; record own physical feedback</td>
                                                            <td>Share experience on social media; recommend to others</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="row-label">Touchpoint</td>
                                                            <td>Social media; gender equality seminars</td>
                                                            <td>Official VR website; influencer/KOL reviews</td>
                                                            <td>Exhibition booths; developer website</td>
                                                            <td>Internal organization use; student workshops</td>
                                                            <td>Personal social media; public speeches/works</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="row-label">Feeling</td>
                                                            <td>Curious & Concerned</td>
                                                            <td>Curious & Expectant</td>
                                                            <td>Nervous & Expectant</td>
                                                            <td>Nervous & Excited</td>
                                                            <td>Satisfied & Empathetic</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="study-footer">
                                                * Structured based on the Tingle Tennis User Journey Map analysis.
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section 04: Our Goal (橫向長條) */}
            <section id="section4" className="tingle-goal-strip">
                <Container fluid className="px-0">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={`T-goal-content-wrapper ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                                <div className="goal-text-container">
                                    <span className="goal-number">04</span>
                                    <h2 className="goal-label">Our Goal</h2>
                                    <div className="goal-divider"></div>
                                    <p className="goal-statement">
                                        To bridge the empathy gap by integrating <strong>Unity VR</strong> and <strong>TENS</strong> technology,
                                        transforming invisible physiological challenges into a shared sensory experience that empowers
                                        social understanding and support for athletes.
                                    </p>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* Section 5 */}
            <section id="section5" className="tingle-flow-section">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="description-number">05</h2>
                        <h3 className="description-title">Game Flow Chart</h3>
                    </div>

                    <Row className="justify-content-center align-items-stretch">
                        {/* Step 1: Preparation */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="flow-card">
                                <div className="flow-step">Phase 01</div>
                                <h4 className="flow-title">Preparation Stage</h4>
                                <p className="flow-desc">
                                    Players start in their room, choosing items (Coffee, Painkillers, etc.)
                                    that affect their <strong>Concentration</strong> and <strong>Pain Levels</strong> for the day.
                                </p>
                                <div className="flow-tag">Decision Making and Menstrual Education</div>
                            </div>
                        </Col>

                        {/* Step 2: Haptic Feedback */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="flow-card active-flow">
                                <div className="flow-step">Phase 02</div>
                                <h4 className="flow-title">Tennis Practice Stage</h4>
                                <p className="flow-desc">
                                    The system transmits signals to <strong>TENS</strong> and <strong>Thermal</strong> hardware,
                                    triggering real-time menstrual cramp sensations based on the game's cycle.
                                </p>
                                <div className="flow-tag">Experience of Decision-Based Changing Pain Level</div>
                            </div>
                        </Col>

                        {/* Step 3: Sport Experience */}
                        <Col lg={4} md={6} className="mb-4">
                            <div className="flow-card">
                                <div className="flow-step">Phase 03</div>
                                <h4 className="flow-title">Final Match Stage</h4>
                                <p className="flow-desc">
                                    Players engage in a tennis match while enduring physiological pain,
                                    experiencing how physical conditions impact athletic performance.
                                </p>
                                <div className="flow-tag">compete with AI competitor under pain pressure</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-5">
                        <Col lg={10} md={12}>
                            <div className="item-effect-wrapper">
                                {/* 左上角標題 */}
                                <div className="item-effect-label">
                                    <div className="item-effect-label">
                                        <span className="item-effect-intro">Introduction of</span>
                                        <span className="item-effect-title">Item Design</span>
                                        <span className="item-effect-subtitle">room scene</span>
                                    </div>
                                </div>
                                <img
                                    src={itemEffectImg}
                                    alt="Item Effect Diagram"
                                    className="item-effect-img"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="tennis-interaction-row align-items-stretch">
                        {/* 左半邊：標題 + 圖片 */}
                        <Col lg={5} md={12}>
                            <div className="tennis-interaction-text-wrapper">
                                {/* 標題（沿用舊 CSS） */}
                                <div className="interaction-title">
                                    <span className="interaction-intro">Introduction of</span>
                                    <h2 className="interaction-main-title">Tennis Interaction</h2>
                                    <span className="item-effect-subtitle">practice and match stage</span>
                                </div>

                                {/* 說明文字 */}
                                <p className="interaction-description">
                                    After selecting the required items in the room scene, players enter the tennis court to begin
                                    their training and learn how to perform proper swing motions. During gameplay, players are
                                    required to change sanitary pads according to on-screen instructions.
                                    <br /><br />
                                    Failure to replace the sanitary product within the specified time limit will result in an
                                    early termination of the training session, leading to a reduced concentration score. This
                                    directly increases the difficulty of subsequent actions, causing slower reaction times and
                                    decreased shot accuracy during practice or matches.
                                    <br /><br />
                                    After completing three days of training, players advance to the match stage, where they
                                    compete in a full tennis match against a specially designed AI opponent, experiencing how
                                    accumulated physical conditions and decision-making impact overall performance.
                                </p>
                            </div>
                        </Col>


                        {/* 右半邊：YouTube 影片 */}
                        <Col lg={7} md={12}>
                            <div className="interaction-video-wrapper">
                                <div className="video-ratio">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CRy5uVJ_atg?si=PJ8gvH5ju24gHPLS&amp;clip=Ugkxe1S-oHQK0e0dBFfGoFGkMRb2wuyK52iC&amp;clipt=EL3RCBidpgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </Col>
                    </Row>


                    {/* 這裡可以放你實際的 Flow Chart 圖片 */}
                    <Row className="mt-5 justify-content-center d-flex align-items-stretch gy-5">
                        <Col lg={6} md={12}>
                            <div className="main-flow-image-container">
                                <div className="flow-overlay">SYSTEM ARCHITECTURE FLOW</div>
                                <img src={flowChartImg} alt="Flow Chart" className="flow-img-large" />
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className="main-flow-image-container">
                                <div className="flow-overlay">FACTOR MAP</div>
                                <img src={factorMap} alt="Factor Map" className="flow-img-large" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section 6 */}
            <section id="section6" className="tingle-hardware-section">
                <Container>
                    <Row className="align-items-center">
                        {/* 左半邊：Hardware Architecture 專業英文解釋 */}
                        <Col lg={6} md={12}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                        <h2 className="description-number">06</h2>
                                        <h3 className="description-title">Hardware Architecture</h3>

                                        <div className="hardware-detail-item">
                                            <h4 className="hw-item-title">1. TENS Electrical Stimulation</h4>
                                            <p className="hw-item-text">
                                                To replicate the rhythmic cramping and throbbing sensations of uterine contractions, the system integrates a <strong>TENS (Transcutaneous Electrical Nerve Stimulation)</strong> module. Unity transmits real-time commands to an <strong>Arduino Uno</strong> to modulate pulse frequency and intensity. We specifically engineered stochastic (randomized) current oscillations to simulate the unpredictable nature of menstrual pain, which directly challenges the user's concentration and muscular response during the tennis match.
                                            </p>
                                        </div>

                                        <div className="hardware-detail-item">
                                            <h4 className="hw-item-title">2. Thermal Feedback System</h4>
                                            <p className="hw-item-text">
                                                The hardware incorporates high-performance heating elements designed to work in tandem with the TENS electrodes. This thermal integration serves as a <strong>relief mechanism</strong> within the simulation. When a player selects a "Hot Water Bag" in the virtual environment, the heater rapidly elevates its temperature, providing physical thermal feedback that allows the user to intuitively experience the soothing process of menstrual pain relief.
                                            </p>
                                        </div>

                                        <div className="hardware-detail-item">
                                            <h4 className="hw-item-title">3. Real-time Synchronization</h4>
                                            <p className="hw-item-text">
                                                The central control unit utilizes <strong>Serial Communication</strong> to establish a bi-directional link between Unity and the physical hardware. The system dynamically adjusts hardware output parameters based on the player's current stage in the 3-day virtual menstrual cycle. This ensures that virtual physiological data (such as menstrual flow and pain levels) is precisely translated into somatic pressure and temperature changes.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>

                        {/* 右半邊：兩張帶有白色背景容器的圖片 */}
                        <Col lg={6} md={12}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={`hardware-images-wrapper ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>

                                        {/* 第一張圖：User setup diagram */}
                                        <div className="hw-image-container mb-5">
                                            <div className="hw-white-box">
                                                <img src={hardware1} alt="User setup diagram" className="hw-diagram-img" />
                                            </div>
                                            <div className="hw-label">Hardware Deployment & User Setup</div>
                                        </div>

                                        {/* 第二張圖：Detailed components */}
                                        <div className="hw-image-container">
                                            <div className="hw-white-box">
                                                <img src={hardware2} alt="TENS components" className="hw-diagram-img" />
                                            </div>
                                            <div className="hw-label">TENS Device & Circuitry Detail</div>
                                        </div>

                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Section 7*/}
            <section id="section7" className="tingle-full-video-section">
                {/* 上方：滿版影片區 */}
                <div className="video-full-container">
                    <div className="video-iframe-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/CRy5uVJ_atg?autoplay=1&mute=1&loop=1&playlist=CRy5uVJ_atg&playsinline=1&rel=0"
                            title="Tingle Tennis System Interaction Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    {/* 底部漸層遮罩 */}
                    <div className="video-bottom-gradient"></div>
                </div>

                {/* 下方：標題文字區 */}
                <div className="video-bottom-text-area">
                    <Container>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                    <div className="d-flex align-items-baseline gap-3">
                                        <h2 className="video-full-number-bottom">07</h2>
                                        <h3 className="video-full-title-bottom">System Interaction Demo</h3>
                                    </div>
                                    <p className="video-subtext">
                                        Presented by: Michelle Chang, Ken Wu, Sharin Lai, James Lee, and Leo Ho
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                    </Container>
                </div>
            </section>
        </div>
    );
};