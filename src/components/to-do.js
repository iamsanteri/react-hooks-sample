import React from "react";

export default function TaskList (props) {
    if (!props.value) return null;

    // Declaring a function that triggers the props.deleteFunction which is passed as a prop to the child component
    const remove = (i) => {
        props.deleteFunction(i);
    }

    const anInlineStyle2 = {
        marginTop: "10px",
        marginBottom: "20px"
    };

    // Cycling through todos that are passed as a prop called "value" by the parent component
    const listMap = props.value.map(function(item) {
        return (
            <div>
                <li>{item}</li>
                <button style={anInlineStyle2} onClick={() => remove(item)}>Done</button>
            </div>
        );
    })
    
    return (
        <ul>{listMap}</ul>
    );
}
