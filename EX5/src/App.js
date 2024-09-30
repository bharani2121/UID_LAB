import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Simple Counter Application</h1>
      <div>
        <button onClick={increment} className="big-button" style={{ backgroundColor: 'green', color: 'white' }}>
          Increment
        </button>
        <button onClick={decrement} className="big-button" style={{ backgroundColor: 'blue', color: 'white' }}>
          Decrement
        </button>
        <button onClick={reset} className="big-button" style={{ backgroundColor: 'gray', color: 'white' }}>
          Reset
        </button>
      </div>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default App;
