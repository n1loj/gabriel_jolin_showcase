import React from 'react'
import "./advancedcard.scss"
import { useState } from 'react';
import Popup from '../Popup/Popup';


const AdvancedCard = ({
    title,
    description,
    thumbnail
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
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My Popup</h3>
                <p>This is my popup</p>
            </Popup>
        </section>
    )
}

export default AdvancedCard;