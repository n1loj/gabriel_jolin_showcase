import React from "react";
import "./popup.scss";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Closeit</button> 
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Popup;