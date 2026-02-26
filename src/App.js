import React, { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Squats", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Jump Rope", type: "duration" }
  ];

  const renderExercise = () => {
    if (!selectedExercise) {
      return (
        <div>
          <h1>Exercise Menu</h1>
          {exercises.map((exercise, index) => (
            <button
              key={index}
              onClick={() => setSelectedExercise(exercise)}
              style={{ margin: "10px", padding: "10px" }}
            >
              {exercise.name}
            </button>
          ))}
        </div>
      );
    }

    if (selectedExercise.type === "repetition") {
      return <RepetitionExercise name={selectedExercise.name} />;
    }

    if (selectedExercise.type === "duration") {
      return <DurationExercise name={selectedExercise.name} />;
    }
  };

  return <div className="App">{renderExercise()}</div>;
}

export default App;