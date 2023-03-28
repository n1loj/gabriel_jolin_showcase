import './App.scss';
import Alice from "./assets/images/Alice.jpg";
import EngineeringBackground from "./assets/images/EngineeringBackground.jpg";
import TestPdf from "./assets/pdfs/pdfTest.pdf";
import React from 'react'
import AdvancedCard from './Components/AdvancedCard/AdvancedCard';

function App() {
  return (
    <div className="homepage">
      <div className="flex-container">
        <AdvancedCard
          className='flex-item'
          title="Jungmin"
          description="<3"
          thumbnail="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/heart.png"
          pdfLocation={TestPdf}
        />
        <AdvancedCard
          className='flex-item'
          title="Alice"
          description="Love"
          thumbnail={Alice}
          pdfLocation={TestPdf}
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
