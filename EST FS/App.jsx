import React, { useState } from 'react';
import MemoizedList from './MemoizedList';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const [listItems] = useState(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      id: index,
      text: `Item ${index + 1}`,
    }));
  });

  console.log('App rendered at:', new Date().toLocaleTimeString(), '- Counter:', counter);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>React.memo Demonstration</h1>
      
      <div style={{ border: '2px solid red', padding: '10px', margin: '10px 0' }}>
        <h2>Parent Component (Unrelated State)</h2>
        <p>Counter: <strong>{counter}</strong></p>
        <button 
          onClick={() => setCounter(counter + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Increment Counter
        </button>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Click the button above to increment the counter. <br />
          Watch the console to see that the MemoizedList component does NOT re-render,
          even though the parent (App) component re-renders.
        </p>
      </div>

      {/* This component is memoized and only re-renders when its props change */}
      <MemoizedList items={listItems} />

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h3>How to verify the memoization works:</h3>
        <ol>
          <li>Open the browser's Developer Console (F12)</li>
          <li>Click the "Increment Counter" button multiple times</li>
          <li>You'll see "App rendered at: [time]" messages in the console every time you click</li>
          <li>You will NOT see "MemoizedList rendered at: [time]" messages because the list items prop hasn't changed</li>
          <li>The MemoizedList component is prevented from re-rendering by React.memo</li>
        </ol>
      </div>
    </div>
  );
};

export default App;
