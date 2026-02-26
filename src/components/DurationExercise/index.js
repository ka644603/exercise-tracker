import React, { useState, useEffect } from "react";

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const paddedMins = mins < 10 ? "0" + mins : mins;
    const paddedSecs = secs < 10 ? "0" + secs : secs;

    return `${paddedMins}:${paddedSecs}`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{formatTime()}</h2>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button
        onClick={() => {
          setRunning(false);
          setSeconds(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default DurationExercise;