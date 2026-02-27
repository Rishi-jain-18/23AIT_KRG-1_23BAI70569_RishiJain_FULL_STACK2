import React, { useState, useEffect, useCallback } from "react";
import fx from "fireworks";

const CounterDisplay = React.memo(() => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("waterCount");
    return saved ? Number(saved) : 0;
  });

  const goal = 8;

  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleRemove = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  useEffect(() => {
    if (count >= goal) {
      let i = 0;
      const interval = setInterval(() => {
        fx({
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight / 2),
        });
        i++;
        if (i === 8) clearInterval(interval);
      }, 400);
      return () => clearInterval(interval);
    }
  }, [count]);

  return (
    <div className="container">
      <h1>Water Tracker</h1>
      <h3>{count} / {goal} Glasses</h3>
      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleAdd}>+ Add</button>
        <button onClick={handleRemove}>- Remove</button>
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleReset}>Reset</button>
      </div>
      {count >= goal && (
        <h2 className="goal">Goal Reached!</h2>
      )}
    </div>
  );
});

export default CounterDisplay;