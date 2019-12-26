import React, {useState} from "react";
import TaskList from "./to-do.js";

export default function Form () {
    const [textValue, setTextValue] = useState("")
    const [allTodos, setAllTodos] = useState([])  

    const submit = () => {
        setAllTodos([...allTodos, textValue]);
        document.querySelector("#input").value = "";
        return {allTodos, textValue: ""}
    }    

    const handleDelete = (item) => {
        var newArray = allTodos.filter(todo => todo !== item)
        setAllTodos(newArray);
    }
    
    return (
        <div>
            <p>What needs to be done today?</p>
            <input id="input" onChange={ (event) => setTextValue(event.target.value)} />
            <button onClick={ () => submit() }>Add task</button>
            <TaskList value={allTodos} deleteFunction={handleDelete} />
        </div>
    );
}