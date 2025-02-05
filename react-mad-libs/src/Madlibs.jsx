import React, { useState } from "react";
import NewStoryForm from "./NewStoryForm";
import Story from "./Story";
import "./Madlibs.css"; 

const Madlibs = () => {
    const [currStory, setStory] = useState(null);

    const restart = () => {
        setStory(null);
    };

    const getStory = (newStory) => {
        setStory(newStory);
    };

    return (
        <div className="madlibs-container">
            <h2 className="madlibs-title">Madlibs!</h2>
            {currStory ? (
                <Story
                    noun1={currStory.noun1}
                    noun2={currStory.noun2}
                    adjective={currStory.adjective}
                    color={currStory.color}
                    restart={restart}
                />
            ) : (
                <NewStoryForm getStory={getStory} />
            )}
        </div>
    );
};

export default Madlibs;
