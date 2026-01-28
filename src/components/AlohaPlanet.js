import React, { useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "./AlohaPlanet.css";

import alohaHeroFull from "../assets/img/Aloha-banner.png";
import frame1Img from "../assets/img/Aloha-init1.png";
import frame2Img from "../assets/img/Aloha-init2.png";
import frame3Img from "../assets/img/Aloha-init3.png";
import frame4Img from "../assets/img/Aloha-init4.png";
import frame5Img from "../assets/img/Aloha-init5.png";
import frame6Img from "../assets/img/Aloha-init6.png";
import stage1Img from "../assets/img/Aloha-stage1.png";
import stage2Img from "../assets/img/Aloha-stage2.png";
import stage3Img from "../assets/img/Aloha-stage3.png";
import task1Img from "../assets/img/Aloha-task1.png";
import task2Img from "../assets/img/Aloha-task2.png";
import task3Img from "../assets/img/Aloha-task3.png";
import affinityImg from "../assets/img/Aloha-AffinityDiagram.png";
import empathyImg from "../assets/img/Aloha-EmpathyMap.png";


export const AlohaPlanet = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            {/* Section 1: Hero */}
            <section id="section1" className="aloha-hero-section">
                <div className="aloha-hero-wrapper">

                    {/* Hero Background Image */}
                    <img
                        src={alohaHeroFull}
                        alt="ALOHA Planet Immersive Environment"
                        className="aloha-hero-image"
                    />

                    {/* Gradient Overlay */}
                    <div className="aloha-hero-gradient"></div>

                    {/* Text Overlay */}
                    <div className="aloha-hero-text">
                        <Container>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeInUp"
                                                : ""
                                        }
                                    >
                                        {/* Tagline */}
                                        <span className="aloha-hero-tagline">
                                            Project from  HCI course 2024
                                        </span>

                                        {/* Title */}
                                        <h1 className="aloha-hero-title">
                                            <span className="aloha-title-main">ALOHA</span>{" "}
                                            <span className="aloha-title-sub">Planet</span>
                                        </h1>

                                        {/* Subtitle */}
                                        <h2 className="aloha-hero-subtitle">
                                            Alleviating Stress and Managing Emotions
                                            <br />
                                            through a VR Experience
                                        </h2>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Container>
                    </div>
                </div>
            </section>
            {/* Research Focus Strip */}
            <section className="aloha-research-strip">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <div className="aloha-research-content">
                                    <h4 className="aloha-research-title">
                                        Research-Driven HCI Project
                                    </h4>

                                    <p className="aloha-research-text">
                                        This project focuses on an <strong>HCI research–driven
                                            design process</strong>, approaching interaction design
                                        from a <strong>User Study</strong> perspective. The work
                                        spans multiple stages, including <strong>How Might We
                                            (HMW)</strong> framing, concept video exploration,
                                        low-fidelity and mid-fidelity prototyping, heuristic
                                        evaluation, and final system implementation.
                                    </p>

                                    <p className="aloha-research-text">
                                        What distinguished our team from others in the course was
                                        not only the completeness of this research pipeline, but
                                        the fact that we translated these insights into a fully
                                        interactive experiential system. Using <strong>Unity XR</strong>,
                                        we implemented a functional VR-based installation rather
                                        than a conceptual prototype, demonstrating how HCI
                                        research can materialize as an embodied interactive device.
                                    </p>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* Section 2: Introduction */}
            <section id="section2" className="aloha-intro-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} md={10}>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div
                                        className={
                                            isVisible
                                                ? "animate__animated animate__fadeInUp"
                                                : ""
                                        }
                                    >
                                        <h2 className="aloha-section-number">01</h2>
                                        <h3 className="aloha-section-title">Introduction</h3>

                                        <div className="aloha-intro-text">
                                            <p>
                                                In modern society, emotional stress has become an
                                                increasingly common yet often overlooked issue affecting
                                                mental well-being. While various methods for stress
                                                management exist, many individuals hesitate to seek
                                                support due to a lack of privacy, accessibility, or
                                                emotional comfort.
                                            </p>

                                            <p>
                                                <strong>ALOHA Planet</strong> was developed to address
                                                this gap. Designed as an emotional dialogue device
                                                situated in everyday environments such as university
                                                campuses, ALOHA Planet provides users with a private
                                                and non-intrusive space to slow down and reconnect with
                                                their inner emotional state.
                                            </p>

                                            <p>
                                                Inside the installation, users enter a secluded
                                                environment, lie on a bean bag, and are surrounded by
                                                calming elements such as aromatherapy and controlled
                                                airflow. By wearing a VR headset, they are guided into
                                                an immersive experience where they can choose solitary
                                                virtual spaces—such as a beach or forest—accompanied by
                                                soothing soundscapes.
                                            </p>

                                            <p>
                                                Rather than offering direct solutions, the system
                                                encourages users to engage in self-dialogue through
                                                gentle interactive guidance. By creating a temporary
                                                emotional refuge within a public setting, ALOHA Planet
                                                explores how immersive VR environments can support
                                                emotional expression and stress relief in a natural
                                                and accessible manner.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Research Artifacts: Affinity Diagram & Empathy Map */}
            <section id="section3" className="aloha-research-artifacts-section">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <h2 className="aloha-section-number">02</h2>
                                <h3 className="aloha-section-title">
                                    Research Artifacts
                                </h3>

                                <Row className="aloha-artifact-grid">
                                    {/* Affinity Diagram */}
                                    <Col md={6} sm={12} className="aloha-artifact-card">
                                        <a
                                            href="https://www.figma.com/file/cfBtdvU8HIhw6NeqgDS7ag/affinity-diagram-%26-empathy-map?type=whiteboard&node-id=1802-1228&t=pMFiJB6QVTtgJRmi-4"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="aloha-artifact-link"
                                        >
                                            <div className="aloha-artifact-image">
                                                <img src={affinityImg} alt="Affinity Diagram" />
                                            </div>

                                            <div className="aloha-artifact-text">
                                                <h4>Affinity Diagram</h4>
                                                <p>
                                                    Synthesizing user study insights to identify recurring
                                                    emotional patterns, needs, and pain points that informed
                                                    the interaction design of ALOHA Planet.
                                                </p>
                                                <span className="aloha-artifact-cta">
                                                    View detailed analysis →
                                                </span>
                                            </div>
                                        </a>
                                    </Col>

                                    {/* Empathy Map */}
                                    <Col md={6} sm={12} className="aloha-artifact-card">
                                        <a
                                            href="https://www.figma.com/file/cfBtdvU8HIhw6NeqgDS7ag/affinity-diagram-%26-empathy-map?type=whiteboard&node-id=1802-1227&t=Fsv64ZcVLPRPy69R-4"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="aloha-artifact-link"
                                        >
                                            <div className="aloha-artifact-image">
                                                <img src={empathyImg} alt="Empathy Map" />
                                            </div>

                                            <div className="aloha-artifact-text">
                                                <h4>Empathy Map</h4>
                                                <p>
                                                    Mapping users’ thoughts, feelings, behaviors, and
                                                    motivations to better understand emotional states
                                                    and guide scenario-based interaction design.
                                                </p>
                                                <span className="aloha-artifact-cta">
                                                    View detailed analysis →
                                                </span>
                                            </div>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* Section 3: Interaction Scenario (Image Table) */}
            <section className="aloha-scenario-section">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                {/* <h2 className="aloha-section-number">02</h2> */}
                                <h3 className="aloha-section-title">
                                    Interaction Scenario Breakdown
                                </h3>

                                <Row className="aloha-scenario-grid">
                                    {/* Frame 1 */}
                                    <Col md={4} sm={12} className="aloha-scenario-cell">
                                        <div className="aloha-scenario-image-placeholder">
                                            <img src={frame1Img} alt="Frame 1" />
                                        </div>
                                        <div className="aloha-scenario-text">
                                            <h4>Frame 1</h4>
                                            <p>
                                                Alice has been under prolonged academic pressure. Feeling
                                                mentally exhausted, she encounters the ALOHA Planet
                                                installation and decides to step inside.
                                            </p>
                                            <span className="aloha-scenario-emotion">
                                                Curiosity · Desire for relief
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Frame 2 */}
                                    <Col md={4} sm={12} className="aloha-scenario-cell">
                                        <div className="aloha-scenario-image-placeholder">
                                            <img src={frame2Img} alt="Frame 2" />
                                        </div>
                                        <div className="aloha-scenario-text">
                                            <h4>Frame 2</h4>
                                            <p>
                                                As Alice looks upward, her surroundings transform into
                                                a vast and soothing sky-like environment.
                                            </p>
                                            <span className="aloha-scenario-emotion">
                                                Surprise
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Frame 3 */}
                                    <Col md={4} sm={12} className="aloha-scenario-cell">
                                        <div className="aloha-scenario-image-placeholder">
                                            <img src={frame3Img} alt="Frame 3" />
                                        </div>
                                        <div className="aloha-scenario-text">
                                            <h4>Frame 3</h4>
                                            <p>
                                                Alice slowly walks toward the center of the installation,
                                                immersing herself in the surrounding atmosphere.
                                            </p>
                                            <span className="aloha-scenario-emotion">
                                                Calm · Exploration
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Frame 4 */}
                                    <Col md={4} sm={12} className="aloha-scenario-cell">
                                        <div className="aloha-scenario-image-placeholder">
                                            <img src={frame4Img} alt="Frame 4" />
                                        </div>
                                        <div className="aloha-scenario-text">
                                            <h4>Frame 4</h4>
                                            <p>
                                                Guided by visual cues on the ground, Alice gently lowers
                                                her head and shifts her attention downward.
                                            </p>
                                            <span className="aloha-scenario-emotion">
                                                Attentiveness
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Frame 5 */}
                                    <Col md={4} sm={12} className="aloha-scenario-cell">
                                        <div className="aloha-scenario-image-placeholder">
                                            <img src={frame5Img} alt="Frame 5" />
                                        </div>
                                        <div className="aloha-scenario-text">
                                            <h4>Frame 5</h4>
                                            <p>
                                                Alice gazes upward as light emerges from the ceiling,
                                                evoking a sense of wonder and openness.
                                            </p>
                                            <span className="aloha-scenario-emotion">
                                                Wonder · Emotional openness
                                            </span>
                                        </div>
                                    </Col>

                                    {/* Frame 6 */}
                                    <Col md={4} sm={12} className="aloha-scenario-cell">
                                        <div className="aloha-scenario-image-placeholder">
                                            <img src={frame6Img} alt="Frame 6" />
                                        </div>
                                        <div className="aloha-scenario-text">
                                            <h4>Frame 6</h4>
                                            <p>
                                                A reflective question appears, inviting Alice to
                                                express thoughts she may not usually articulate.
                                            </p>
                                            <span className="aloha-scenario-emotion">
                                                Reflection
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* Section 4: Design Improvement Process */}
            <section id="section4" className="aloha-process-strip-section">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <h2 className="aloha-section-number">03</h2>
                                <h3 className="aloha-section-title">
                                    Design Improvement Process
                                </h3>

                                {/* Stage 1 */}
                                <div className="aloha-process-strip">
                                    <div className="aloha-process-text">
                                        <span className="aloha-process-step">Stage 01</span>
                                        <h4 className="aloha-process-title">Concept Video</h4>
                                        <p className="aloha-process-desc">
                                            The initial concept of ALOHA Planet was envisioned as an
                                            interior installation placed within a school environment.
                                            A concept video was created to explore spatial atmosphere,
                                            emotional tone, and potential user behavior.
                                        </p>
                                    </div>

                                    <div className="aloha-process-image-strip">
                                        <img src={stage1Img} alt="Concept video strip" />
                                    </div>
                                </div>

                                {/* Stage 2 */}
                                <div className="aloha-process-strip">
                                    <div className="aloha-process-text">
                                        <span className="aloha-process-step">Stage 02</span>
                                        <h4 className="aloha-process-title">Low-Fidelity and Mid-Fidelity Prototype</h4>
                                        <p className="aloha-process-desc">
                                            A low-fidelity and a mid-Fidelity prototype was developed using Bezi to
                                            construct the core game scene of ALOHA Planet, focusing
                                            on interaction flow and emotional pacing rather than
                                            technical precision.
                                        </p>
                                    </div>

                                    <div className="aloha-process-image-strip">
                                        <img src={stage2Img} alt="Low-Fidelity and Mid-Fidelity strip" />
                                    </div>
                                </div>

                                {/* Stage 3 */}
                                <div className="aloha-process-strip">
                                    <div className="aloha-process-text">
                                        <span className="aloha-process-step">Stage 03</span>
                                        <h4 className="aloha-process-title">Final Implementation</h4>
                                        <p className="aloha-process-desc">
                                            The final version was implemented using Unity XR and
                                            A-Frame to deliver a complete VR experience, integrating
                                            interaction logic, visual design, and emotional guidance
                                            into a unified system.
                                        </p>
                                    </div>

                                    <div className="aloha-process-image-strip">
                                        <img src={stage3Img} alt="Final VR game strip" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* Section 5: Tasks and Final User Interface */}
            <section id="section5" className="aloha-tasks-section">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <h2 className="aloha-section-number">04</h2>
                                <h3 className="aloha-section-title">
                                    Tasks and Final User Interface
                                </h3>

                                {/* Task 1 */}
                                <div className="aloha-task-block">
                                    <div className="aloha-task-text">
                                        <span className="aloha-task-label">Task 01</span>
                                        <h4 className="aloha-task-title">
                                            Read the Background Story
                                        </h4>
                                        <p className="aloha-task-desc">
                                            This initial task introduces users to the narrative
                                            background of the ALOHA Planet experience. By reading
                                            the story, users gain contextual understanding of the
                                            virtual world, allowing them to gradually immerse
                                            themselves in the emotional atmosphere of the game.
                                        </p>
                                    </div>

                                    <div className="aloha-task-image">
                                        <img src={task1Img} alt="Task 1 UI" />
                                    </div>
                                </div>

                                {/* Task 2 */}
                                <div className="aloha-task-block">
                                    <div className="aloha-task-text">
                                        <span className="aloha-task-label">Task 02</span>
                                        <h4 className="aloha-task-title">
                                            Search and Interact with Creatures
                                        </h4>
                                        <p className="aloha-task-desc">
                                            In this task, users explore the planet and search for
                                            small creatures scattered throughout the environment.
                                            By interacting with these creatures, users are encouraged
                                            to actively explore the space, enhancing engagement and
                                            reinforcing a sense of presence within the virtual world.
                                        </p>
                                    </div>

                                    <div className="aloha-task-image">
                                        <img src={task2Img} alt="Task 2 UI" />
                                    </div>
                                </div>

                                {/* Task 3 */}
                                <div className="aloha-task-block">
                                    <div className="aloha-task-text">
                                        <span className="aloha-task-label">Task 03</span>
                                        <h4 className="aloha-task-title">
                                            Capture the Villain Creature
                                        </h4>
                                        <p className="aloha-task-desc">
                                            The final task introduces a higher level of challenge.
                                            Users are required to utilize in-game tools to capture
                                            the villain creature. This task adds complexity and
                                            difficulty to the experience, providing users with a
                                            strong sense of achievement upon successful completion.
                                        </p>
                                    </div>

                                    <div className="aloha-task-image">
                                        <img src={task3Img} alt="Task 3 UI" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>

            {/* Section 8: Building Environment */}
            <section id="section6" className="aloha-build-section">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                <h2 className="aloha-section-number">05</h2>
                                <h3 className="aloha-section-title">Building Environment</h3>

                                <div className="aloha-build-list">
                                    <div className="aloha-build-item">
                                        <h4>Bezi</h4>
                                        <p>
                                            Used for low-fidelity and mid-fidelity prototyping to
                                            rapidly explore spatial layout, interaction flow, and
                                            narrative structure during early design stages.
                                        </p>
                                    </div>

                                    <div className="aloha-build-item">
                                        <h4>Unity XR</h4>
                                        <p>
                                            Served as the primary development framework for building
                                            immersive and interactive VR experiences, supporting
                                            realistic environments and system-level interaction.
                                        </p>
                                    </div>

                                    <div className="aloha-build-item">
                                        <h4>A-Frame</h4>
                                        <p>
                                            Adopted to experiment with web-based VR interaction and
                                            declarative scene construction, enabling flexible and
                                            accessible interaction design.
                                        </p>
                                    </div>

                                    <div className="aloha-build-item">
                                        <h4>Meta Quest 3</h4>
                                        <p>
                                            Used as the primary VR hardware platform, providing a
                                            stable and high-quality immersive experience for testing
                                            and demonstration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>
            {/* Section 9: Future Improvements & Conclusion */}
            <section id="section7" className="aloha-final-section">
                <Container>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>

                                {/* Future Improvements */}
                                <h2 className="aloha-section-number">06</h2>
                                <h3 className="aloha-section-title">Future Improvements</h3>

                                <div className="aloha-final-text">
                                    <p>
                                        Future iterations of <strong>ALOHA Planet</strong> will
                                        incorporate additional interactive elements and more
                                        intricate storylines, providing users with expanded
                                        opportunities for exploration and engagement.
                                    </p>

                                    <p>
                                        We also plan to further integrate <strong>A-Frame</strong>
                                        with <strong>Unity</strong>, combining the strengths of
                                        both platforms to deliver seamless and visually compelling
                                        VR experiences accessible via the web.
                                    </p>

                                    <p>
                                        Improvements to the user interface will focus on clarity
                                        and ease of use, while advanced emotional feedback systems
                                        powered by <strong>AI</strong> may enable more personalized
                                        and context-aware responses. Future updates may also
                                        explore multiplayer and social interaction features to
                                        foster a sense of community and mutual support.
                                    </p>
                                </div>

                                {/* Conclusion */}
                                <h3 className="aloha-section-title aloha-conclusion-title">
                                    Conclusion
                                </h3>

                                <div className="aloha-final-text">
                                    <p>
                                        <strong>ALOHA Planet</strong> aims to provide users with a
                                        private and natural space for emotional relief through
                                        immersive VR experiences. By addressing the limitations
                                        of conventional emotional management approaches, the
                                        system enables users to engage more deeply with their
                                        emotions in a secluded and supportive environment.
                                    </p>

                                    <p>
                                        The project evolved from an initial concept based on
                                        360-degree projection into a fully interactive VR
                                        experience. Through iterative design, user testing, and
                                        technical evaluation, the interface was refined and
                                        natural elements were introduced to enhance emotional
                                        comfort.
                                    </p>

                                    <p>
                                        By continuously optimizing both design and implementation,
                                        ALOHA Planet demonstrates the potential of VR as a medium
                                        for emotional self-reflection and stress relief. The
                                        project aspires to transform everyday environments into
                                        meaningful opportunities for emotional expression,
                                        tranquility, and mental well-being.
                                    </p>
                                </div>

                            </div>
                        )}
                    </TrackVisibility>
                </Container>
            </section>



        </>
    );
};
