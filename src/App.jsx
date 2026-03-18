import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Simple React App</h1>
        <p>A sample React frontend application</p>
      </header>
      
      <main className="App-main">
        <section className="counter-section">
          <h2>Counter Demo</h2>
          <p>Count: {count}</p>
          <div className="button-group">
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </section>

        <section className="form-section">
          <h2>Input Demo</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name && <p className="greeting">Hello, {name}!</p>}
        </section>
      </main>

      <footer className="App-footer">
        <p>Built with React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;