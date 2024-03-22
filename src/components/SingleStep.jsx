import React from "react";
import "../App.css";

const SingleStep = ({ StepStatus, id, StepTitle }) => {
  const handleClick = () => {
    // Handle click logic here if needed
    console.log(`Step ${id} clicked!`);
  };

  return (
    <div className={`tracking__step ${StepStatus}`} onClick={handleClick}>
      <div className={"step-icon-wrap"}>
        <div className={`step-icon`}>{id}</div>
      </div>
      <h4 className={"step-title"}>{StepTitle}</h4>
    </div>
  );
};

export default SingleStep;
