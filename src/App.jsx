import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from './components/Portfolio'
import Services from "./components/Services";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home/><Resume/><Portfolio /><Services /><Contact /></>}/>
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
