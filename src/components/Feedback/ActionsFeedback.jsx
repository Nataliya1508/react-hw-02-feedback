import React from 'react';
import PropTypes from "prop-types";
// import styles from './feedback.module.css';

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
  leaveFeedback: PropTypes.func.isRequired,
};