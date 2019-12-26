import React from 'react';
import './App.css';
import Form from "./components/form.js";

// This is a base component 

// Rendering a "Form" child component below

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Santeri's small to-do app</h1>
          <Form />
      </header>
    </div>
  );
}

export default App;
