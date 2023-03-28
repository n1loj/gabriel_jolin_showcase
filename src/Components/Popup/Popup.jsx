import React from "react";
import "./popup.scss";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span>
            <div className="popup-inner">
                {props.children}
            </div>
        </div>
    ) : "";
}
export default Popup;