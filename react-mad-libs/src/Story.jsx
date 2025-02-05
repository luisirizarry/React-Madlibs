import React from "react";
import "./Story.css"; 

const Story = ({ noun1, noun2, adjective, color, restart }) => {
    return (
        <div className="story-container">
            <p className="story-text">
                There was a <span className="story-color" style={{ color }}>{color}</span> {noun1} who loved a {adjective} {noun2}.
            </p>
            <button className="restart-button" onClick={restart}>Restart</button>
        </div>
    );
};

export default Story;
