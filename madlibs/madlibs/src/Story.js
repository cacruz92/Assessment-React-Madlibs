import React from "react";

const Story = ({storyData}) => {
return(
    <div className="storyContainer.">
    <h3>
        Once upon a time, in the world of {storyData.adjective1} coding, where {storyData.noun1} roam freely, developers were busy {storyData.verb1}. It was a {storyData.adjective2} era where every {storyData.noun2} was ready to {storyData.verb2}. The community was known for its {storyData.adjective3} approach to building {storyData.noun3}, which had been {storyData.verb3} countless times. Little did they know, the secret to their success lay in the heart of a mysterious {storyData.noun4}.
    </h3>
    </div>
    )
}

export default Story;