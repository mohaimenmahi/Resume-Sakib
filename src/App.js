import React, { Component } from 'react';
import Navigation from './Navigation';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';
import './Appp/css';
import './resume.css';
import './resume.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container-fluid p-0">
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Awards />
        </div>
      </div>
    );
  }
}

export default App;
