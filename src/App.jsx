import './App.scss';

import Alice from "./assets/images/Alice.jpg";
import TestPdf from "./assets/pdfs/pdfTest.pdf";

import RevitLogo from "./assets/images/RevitLogo.png";
import RevitApiPdf from "./assets/pdfs/WPF_Standardization.pdf";

import WPFStandardizationLogo from "./assets/images/WpfStandardizationLogo.png";
import WPFStandardizationPdf from "./assets/pdfs/WPF_Standardization.pdf";

import React from 'react'
import { useRef } from 'react';


function App() {

  const wpfStandardizationSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <div className="header section parallax parallax-0">
        <ul>
          <h1>Gabriel Jolin</h1>
          <h2>Developer Portfolio</h2>
          <div className="arrow bounce">
            <a href="#wpf-standardization" onClick={() => scrollToSection(wpfStandardizationSection)}>&#10148;</a>
          </div>
        </ul>
        
      </div>

      <div className="wpf-standardization content-section" ref={wpfStandardizationSection}>
        <div className='wpf-image'>
          <img src={WPFStandardizationLogo} />
        </div>
        <section className='wpf-content'>
          <h1 className='content-titles'>WPF Standardization</h1>
        </section>
      </div>

      <div className="revit content-section parallax parallax-1">
      </div>
      <div className="footer section parallax parallax-2">
        Section 3
      </div>
    </div>
  )
}

export default App;
