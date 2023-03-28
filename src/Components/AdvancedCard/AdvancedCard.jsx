import React from 'react'
import "./advancedcard.scss"
import { useState } from 'react';
import Popup from '../Popup/Popup';


const AdvancedCard = ({
    title,
    description,
    thumbnail,
    pdfLocation
}) => {

    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <section className='articles'>
            <button className='article' onClick={() => setButtonPopup(true)}>
                <div class="article-wrapper">
                    <figure>
                        <img src={thumbnail} alt="" />
                    </figure>
                    <div class="article-body">
                        <h2>{title}</h2>
                        <p className='description'>
                            {description}
                        </p>
                    </div>
                </div>
            </button>
            <Popup className='popup' trigger={buttonPopup} setTrigger={setButtonPopup}>
                <object className='article_pdf' data={pdfLocation} type="application/pdf">
                </object>
                {/* <iframe className='article_pdf' src={pdfLocation}/> */}
            </Popup>
        </section>
    )
}

export default AdvancedCard;