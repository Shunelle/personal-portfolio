import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Archives } from "./components/Archives";
import { ExtraExperience } from "./components/ExtraExperience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ParticleSphere from './components/ParticleSphere';
import { Archive } from 'react-bootstrap-icons';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TingleTennis } from "./components/TingleTennis";
import { AIdoll } from "./components/AIdoll";
import { ProjectsNavBar } from "./components/ProjectsNavBar";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Banner />
          <Projects />
          {/* <Archives /> */}
          {/* <Footer /> */}
        </>
      } />
      <Route path="/project/tingle-tennis" element={
        <>
          <ProjectsNavBar />
          <TingleTennis />
        </>
      } />
      <Route path="/project/aidoll" element={
        <>
          <ProjectsNavBar />
          <AIdoll />
        </>
      } />
    </Routes>
  );
}

export default App;

