import React from "react";
import "./popup.scss";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span> 
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Popup;