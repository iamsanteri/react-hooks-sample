// Importing necessary functionality from the react package
import React, {useState} from "react";

// Importing a child component for later use below
import TaskList from "./to-do.js";

// Exporting a function component. With react hooks, classes are not necessary
// With classes, the binding of "this" remains unclear to understand, aiming to use react hooks and context when/if needed 
export default function Form () {

    // Initiating the necessary state with hooks.   
    const [textValue, setTextValue] = useState("");
    const [allTodos, setAllTodos] = useState([]); 

    // Add a new todo to list
    // REMEMBER TO USE ARROW FUNCTIONS
    // REMEMBER THAT REACT STATE SHOULD NEVER BE MUTATED DIRECTLY
    const submit = () => {
        setAllTodos([...allTodos, textValue]);
        // With uncontrolled forms, notice below how we reset the input field to blank when adding the todo to the list
        document.querySelector("#input").value = "";
        return {allTodos, textValue: ""}
    };

    // Deleting an element with that name from the state, passing it as a prop to the "TaskList" child component below
    // Notice that we are using an array filter function 
    const handleDelete = (item) => {
        var newArray = allTodos.filter(todo => todo !== item)
        setAllTodos(newArray);
    };

    // Declaring and binding inline style for the use in the template below. 
    const anInlineStyle = {
        margin: "20px"
    };
    
    // Remember to use arrow functions for event handlers, otherwise you will run into errors
    return (
        <div>
            <p>What needs to be done today?</p>
            <input id="input" onChange={ (event) => setTextValue(event.target.value)} />
            <button style={anInlineStyle}onClick={ () => submit()}>Add task</button>
            <TaskList value={allTodos} deleteFunction={handleDelete} />
        </div>
    );
}