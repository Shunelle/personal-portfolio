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


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <Projects />
      <Archives />
      <ExtraExperience />
      <Skills />
      
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
