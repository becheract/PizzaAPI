import React from 'react';
import pizza from './pizza.svg';
import { Counter } from './features/counter/Counter';
import './styles/App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
