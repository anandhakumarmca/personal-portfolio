import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Skills from './Skills';
import MyProjects from './MyProjects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Banner />
        <Skills />
        <MyProjects />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
