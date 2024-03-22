import React, { useState } from "react";
import SingleStep from "./components/SingleStep";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialStepsArray = [
  { id: 1, StepStatus: "", StepTitle: "Krok numer 1" },
  { id: 2, StepStatus: "", StepTitle: "Krok numer 2" },
  { id: 3, StepStatus: "", StepTitle: "Krok numer 3" },
  { id: 4, StepStatus: "", StepTitle: "Krok numer 4" },
];

const App = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [stepsArray, setStepsArray] = useState(initialStepsArray);
  const [selectedStepTitle, setSelectedStepTitle] = useState("");

  const handleCofnij = () => {
    if (completedSteps.length > 0) {
      console.log(completedSteps);
      const lastCompletedStep = completedSteps[completedSteps.length - 1];
      const updatedStepsArray = stepsArray.map((step) => {
        if (step.id === lastCompletedStep) {
          return { ...step, StepStatus: "" };
        }
        return step;
      });
      setCompletedSteps(completedSteps.slice(0, -1));
      setStepsArray(updatedStepsArray);
      const remainingSteps = completedSteps.slice(0, -1);
      const newSelectedStepTitle =
        completedSteps.length > 1
          ? stepsArray.find(
              (step) => step.id === remainingSteps[remainingSteps.length - 1]
            ).StepTitle
          : "";
      setSelectedStepTitle(newSelectedStepTitle);
    }
  };

  const handleDalej = () => {
    const incompleteSteps = stepsArray.filter(
      (step) => !completedSteps.includes(step.id)
    );

    if (incompleteSteps.length > 0) {
      const nextStep = incompleteSteps[0];
      const updatedStepsArray = stepsArray.map((step) => {
        if (step.id === nextStep.id) {
          return { ...step, StepStatus: "completed" };
        }
        return step;
      });
      setCompletedSteps([...completedSteps, nextStep.id]);
      setStepsArray(updatedStepsArray);
      setSelectedStepTitle(nextStep.StepTitle);
    }
  };

  const handleAdd = () => {
    let newStepPrompt = prompt("Podaj nazwe nowego kroku: ");

    const newStep = {
      id: stepsArray.length + 1,
      StepStatus: "",
      StepTitle: `${
        newStepPrompt ? newStepPrompt : `Krok numer ${stepsArray.length + 1}`
      }`,
    };
    setStepsArray([...stepsArray, newStep]);
  };

  const handleStepClick = (stepId, stepTitle) => {
    const isCompleted = completedSteps.includes(stepId);

    if (!isCompleted) {
      setCompletedSteps([...completedSteps, stepId]);
      setSelectedStepTitle(stepTitle);
    } else {
      const updatedCompletedSteps = completedSteps.filter(
        (id) => id !== stepId
      );
      setCompletedSteps(updatedCompletedSteps);
      setSelectedStepTitle("");
    }
  };

  return (
    <div className="main_container">
      <div className="container">
        <h3 className="selected-step-title">{selectedStepTitle}</h3>
        <div className="card-body pt-5">
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            {stepsArray.map((step) => (
              <SingleStep
                key={step.id}
                StepStatus={step.StepStatus}
                id={step.id}
                StepTitle={step.StepTitle}
                onClick={() => handleStepClick(step.id, step.StepTitle)}
              />
            ))}
          </div>
          <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
            <button
              className="btn btn-primary"
              type="button"
              id="leftArrow"
              onClick={handleCofnij}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                class="icon"
              >
                <path
                  d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                  fill="#000000"
                />
              </svg>
            </button>
            <button
              className="btn btn-primary"
              type="button"
              id="rightArrow"
              onClick={handleDalej}
            >
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 1024 1024"
                class="icon"
              >
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                />
              </svg>
            </button>
            <button
              className="btn btn-primary"
              type="button"
              id="dodaj"
              onClick={handleAdd}

            >
              Dodaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
