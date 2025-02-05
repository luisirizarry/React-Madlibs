import React from "react";
import useFields from "./hooks/useFields";
import "./NewStoryForm.css"; 

const NewStoryForm = ({ getStory }) => {
    const [formData, handleChange, resetForm] = useFields({
        noun1: '',
        noun2: '',
        adjective: '',
        color: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        getStory(formData);
        resetForm();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="story-form">
                <input
                    type="text"
                    name="noun1"
                    value={formData.noun1}
                    onChange={handleChange}
                    placeholder="Enter a noun"
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="noun2"
                    value={formData.noun2}
                    onChange={handleChange}
                    placeholder="Enter another noun"
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="adjective"
                    value={formData.adjective}
                    onChange={handleChange}
                    placeholder="Enter an adjective"
                    required
                    className="form-input"
                />
                <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    placeholder="Enter a color"
                    required
                    className="form-input"
                />
                <button className="submit-button">Get Story</button>
            </form>
        </div>
    );
};

export default NewStoryForm;
