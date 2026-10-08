import React from 'react';

const items = ['Apples', 'Bananas', 'Cherries', 'Grapes'];

function App() {
  return (
    <div>
      <h1>My Grocery List</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;