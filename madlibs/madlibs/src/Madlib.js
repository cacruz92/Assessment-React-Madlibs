import React, {useState} from "react";
import WordForm from "./WordForm.js";
import Story from "./Story";

const Madlib = () => {
    const [storyData, setStoryData] = useState(null)    
    function createStory(formData){
        const storyWords = { 
            adjective1: formData.adjective1, 
            noun1: formData.noun1, 
            verb1: formData.verb1, 
            adjective2: formData.adjective2, 
            noun2: formData.noun2, 
            verb2: formData.verb2, 
            adjective3: formData.adjective3, 
            noun3: formData.noun3, 
            verb3: formData.verb3,
            noun4: formData.noun4
        }
        setStoryData(storyWords)
    }

    function resetStory(){
        setStoryData(null)
    }
    return (
        <>
            {!storyData && <WordForm createStory={createStory}/>}
            {storyData && <Story storyData={storyData} /> }
            {storyData && <button onClick={resetStory}> Reset </button>}
        </>
    )
}

export default Madlib;