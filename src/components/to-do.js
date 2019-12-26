import React from "react";

export default function TaskList (props) {
    if (!props.value) return null;

    const remove = (i) => {
        props.deleteFunction(i);
    }

    const listMap = props.value.map(function(item) {
        return (
            <div>
                <li>{item}</li>
                <button onClick={() => remove(item)}>Done</button>
            </div>
        );
    })
    
    return (
        <ul>{listMap}</ul>
    );
}
