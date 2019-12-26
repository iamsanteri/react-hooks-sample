import React from 'react';
import './App.css';
import Form from "./components/form.js";
import myContext from "./myContext.js";

// This is a base component 
// We are rendering a "Form" child component below

function App() {

  // Below we are defining data that we can pass along to the whole component tree with the React context API:
  const passableData = {
      hello: "Hello there, this text is a global prop passed by the react context API... It's unforgiving like nothing else."
  };

  return (
    // Below we are wrapping the app with a provider of MyContext that is imported from my-context.js
    // Additionally we are of course rendering the child components
    <div className="App">
      <myContext.Provider value={passableData}>
        <header className="App-header">
          <h1>Santeri's small to-do app</h1>
            <Form />
        </header>
      </myContext.Provider>
    </div>
  );
}

export default App;
