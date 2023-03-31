import './App.scss';

import Alice from "./assets/images/Alice.jpg";
import TestPdf from "./assets/pdfs/pdfTest.pdf";

import RevitLogo from "./assets/images/RevitLogo.png";
import RevitApiPdf from "./assets/pdfs/WPF_Standardization.pdf";
import RevitGif from "./assets/images/revit.gif"

import WPFStandardizationLogo from "./assets/images/WpfStandardizationLogo.png";
import WPFGif from "./assets/images/wpf1.gif"
//import ExternalLink from "./assets/images/externalLink.png";
import WPFStandardizationPdf from "./assets/pdfs/WPF_Standardization.pdf";
import { FaExternalLinkAlt } from 'react-icons/fa';

import React from 'react'
import { useRef } from 'react';


function App() {

  const headerSection = useRef(null);
  const wpfStandardizationSection = useRef(null);
  const revitSection = useRef(null);
  const footerSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <div className="header section parallax parallax-0"
      ref={headerSection}>
        <div className="centered-layout">
          <div>
            <h1>Gabriel Jolin</h1>
            <h2>Developer Portfolio</h2>
          </div>
        </div>
        <div className="arrow-down bounce-down">
          <a href="#wpf-standardization" onClick={() => scrollToSection(wpfStandardizationSection)}>
            &#10148;
          </a>
        </div>
      </div>

      <div
        className="wpf-standardization section"
        ref={wpfStandardizationSection}
      >
        <div className="section-content">
        <div className="arrow-up bounce-up">
          <a 
            href="#wpf-standardization"
            onClick={() => scrollToSection(headerSection)}
          >
            &#10148;
          </a>
        </div>
          <div className="content-title">
            <div>
              <img src={WPFStandardizationLogo} />
            </div>
            <h1 className="content-titles">WPF Standardization</h1>
            <a href="./assets/pdfs/pdfTest.pdf"><FaExternalLinkAlt /></a>
          </div>
          <img className='content-gif' src={WPFGif} />
          <section className="content">
            <p>
              Standardization of WPF user controls in UI design is vital for
              scalability. Additionally, there are several useful controls not
              provided out-of-the box with .net user controls. Here is how I've
              helped standardize the use of WPF in applications.
            </p>
          </section>
        </div>
        
        <div className="arrow-down bounce-down">
          <a
            href="#wpf-standardization"
            onClick={() => scrollToSection(revitSection)}
          >
            &#10148;
          </a>
        </div>
      </div>

      <hr class='solid'/>

      <div
        className="revit section"
        ref={revitSection}
      >
        <div className="arrow-up bounce-up">
          <a
            href="#wpf-standardization"
            onClick={() => scrollToSection(wpfStandardizationSection)}
          >
            &#10148;
          </a>
        </div>
        <div className="section-content">
          <div className="content-title">
            <div>
              <img src={WPFStandardizationLogo} />
            </div>
            <h1 className="content-titles">Autodesk Development</h1>
            <a href="./assets/pdfs/pdfTest.pdf"><FaExternalLinkAlt /></a>
          </div>
          <img className='content-gif' src={RevitGif} />
          <section className="content">
            <p>
              I've spent a good deal of time in the world of Autodesk .api's. 
              Though most of my familiarity is in the Revit api, I've also spent time in CAD api's 
              (with things such as Sheet Set Manager) as well as Autodesk P&ID api's 
              regarding exporting of P&ID data.  Here are some highlights of my work.
            </p>
          </section>
        </div>
        


        <div className="arrow-down bounce-down">
          <a
            href="#wpf-standardization"
            onClick={() => scrollToSection(footerSection)}
          >
            &#10148;
          </a>
        </div>
      </div>
      <div className="header section parallax parallax-2" ref={footerSection}>
        <div className="arrow-up bounce-up">
          <a
            href="#wpf-standardization"
            onClick={() => scrollToSection(revitSection)}
          >
            &#10148;
          </a>
        </div>
        <div className="centered-layout">
          <div>
            <h1>More to come...</h1>
            <h2>Thank you!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;