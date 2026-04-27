import React from 'react';

// This component renders a list of 1,000 items
// It's wrapped with React.memo to prevent re-renders when unrelated parent state changes
const MemoizedList = React.memo(({ items }) => {
  console.log('MemoizedList rendered at:', new Date().toLocaleTimeString());

  return (
    <div style={{ border: '2px solid blue', padding: '10px', margin: '10px 0' }}>
      <h2>Memoized List ({items.length} items)</h2>
      <p style={{ color: 'blue', fontSize: '12px' }}>
        Check console.log to see render behavior. This component only re-renders when the `items` prop changes.
      </p>
      <ul style={{ maxHeight: '400px', overflow: 'auto' }}>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
});

MemoizedList.displayName = 'MemoizedList';

export default MemoizedList;
