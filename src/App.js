import React from 'react';
import './App.css';
import Form from "./components/form.js";
import TaskList from "./components/to-do.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Santeri's small to-do app</h1>
          <Form />
      </header>
      <TaskList />
    </div>
  );
}

export default App;
