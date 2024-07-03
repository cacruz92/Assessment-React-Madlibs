import React, { useState } from "react";

const WordForm = ({createStory}) => {
    const INITIAL_STATE = {
        adjective1: "",
        noun1: "",
        verb1: "",
        adjective2: "",
        noun2: "",
        verb2: "",
        adjective3: "",
        noun3: "",
        verb3: "",
        noun4: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const validateForm = () => {
        for(const key in formData) {
            if(formData[key].trim() === ""){
                return false
            }
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
            createStory(formData);
            setFormData(INITIAL_STATE);
        } else{
            alert("Please fill out every field!")
        }
        
    }

    

    return(
        <div className="formContainer">
            <h1>MadLib</h1>
            <h3>Fill out the following form to generate a fun story about coding!</h3>
            <form className="wordForm" onSubmit={handleSubmit}>
                
                <label htmlFor="adjective1">Adjective:</label>
                <input 
                id="adjective1"
                type="text"
                name="adjective1"
                placeholder="Add an adjective!"
                value={formData.adjective1}
                onChange={handleChange}
                />
                <br></br>                
                <label htmlFor="noun1">Noun(plural):</label>
                <input 
                id="noun1"
                type="text"
                name="noun1"
                placeholder="Add a plural noun!"
                value={formData.noun1}
                onChange={handleChange}
                />
                <br></br>
                
                <label htmlFor="verb1">Verb ending in "ing":</label>
                <input 
                id="verb1"
                type="text"
                name="verb1"
                placeholder="Add an verb ending in 'ing'!"
                value={formData.verb1}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="adjective2">Adjective:</label>
                <input 
                id="adjective2"
                type="text"
                name="adjective2"
                placeholder="Add an adjective!"
                value={formData.adjective2}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="noun2">Noun:</label>
                <input 
                id="noun2"
                type="text"
                name="noun2"
                placeholder="Add an noun!"
                value={formData.noun2}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="verb2">Verb:</label>
                <input 
                id="verb2"
                type="text"
                name="verb2"
                placeholder="Add an verb!"
                value={formData.verb2}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="adjective3">Adjective:</label>
                <input 
                id="adjective3"
                type="text"
                name="adjective3"
                placeholder="Add an adjective!"
                value={formData.adjective3}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="noun3">Noun:</label>
                <input 
                id="noun3"
                type="text"
                name="noun3"
                placeholder="Add an noun!"
                value={formData.noun3}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="verb3">Verb ending in "-ed":</label>
                <input 
                id="verb3"
                type="text"
                name="verb3"
                placeholder="Add an verb!"
                value={formData.verb3}
                onChange={handleChange}
                />
                <br></br>
                <label htmlFor="noun4">Noun:</label>
                <input 
                id="noun4"
                type="text"
                name="noun4"
                placeholder="Add an noun!"
                value={formData.noun4}
                onChange={handleChange}
                />
                <br></br>
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default WordForm;