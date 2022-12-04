import React from "react";

const Statistics = ({ good, neutral, bad, summary, positive }) => {
    // console.log(summary);
    return (
           <ul>
                    <li>Good:{good}</li>
                    <li>Neutral:{neutral }</li>
            <li>Bad:{bad}</li>
            <li>Sumarry:{summary}</li>
            {good>bad?<li>Positive Feedback: 100%</li>:<li>Positive Feedback: {positive}%</li>}


                </ul>
    )
}


export default Statistics;