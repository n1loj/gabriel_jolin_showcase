import './App.scss';

import EngineeringBackground from "./assets/images/EngineeringBackground.jpg";

import Alice from "./assets/images/Alice.jpg";
import TestPdf from "./assets/pdfs/pdfTest.pdf";

import RevitLogo from "./assets/images/RevitLogo.png";
import RevitApiPdf from "./assets/pdfs/WPF_Standardization.pdf";

import WPFStandardizationLogo from "./assets/images/WpfStandardizationLogo.png";
import WPFStandardizationPdf from "./assets/pdfs/WPF_Standardization.pdf";

import React from 'react'
import AdvancedCard from './Components/AdvancedCard/AdvancedCard';

function App() {
  return (
    <div className="homepage">
      <div className="flex-container">
        <AdvancedCard
          className='flex-item'
          title="WPF Standardization"
          description="Standardization of WPF user controls in UI design is vital for scalability.  
          Additionally, there are several useful controls not provided out-of-the box with .net user controls.  Here is how I've helped standardize the use of WPF in applications."
          thumbnail={WPFStandardizationLogo}
          pdfLocation={WPFStandardizationPdf}
        />
        <AdvancedCard
          className='flex-item'
          title="Autodesk Development"
          description="I've spent a good deal of time in the world of Autodesk .api's. Though most of my familiarity is in the Revit api, 
          I've also spent time in CAD api's (with things such as Sheet Set Manager) as well as Autodesk P&ID api's regarding exporting of P&ID data.  Here are some highlights of my work."
          thumbnail={RevitLogo}
          pdfLocation={RevitApiPdf}
        />
        <AdvancedCard
          className='flex-item'
          title="Title"
          description="TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF 
        TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF 
        TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF TONS OF STUFF "
          thumbnail="https://miro.medium.com/v2/resize:fit:640/format:webp/0*M684C4YtTi75QjUC.jpg"
          pdfLocation={TestPdf}
        />
        <AdvancedCard
          className='flex-item'
          title="Title 2"
          description="Description 2"
          thumbnail="https://miro.medium.com/v2/resize:fit:640/format:webp/0*M684C4YtTi75QjUC.jpg"
          pdfLocation={TestPdf}
        />
      </div>
    </div>
    


  )
}

export default App;
