import React from 'react';
import PropTypes from "prop-types";

export default function ActionsFeedback({leaveFeedback}) {
  return (
    <>
    <div>
        <button onClick={() => leaveFeedback("good")}>Good</button>
  
    
        <button onClick={() => leaveFeedback("neutral")}>Neutral</button>
          
          
        <button onClick={() => leaveFeedback("bad")}>Bad</button>
    </div>
</>
  )
}

ActionsFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};