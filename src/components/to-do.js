import React, {useContext} from "react";
import myContext from "../myContext";

export default function TaskList (props) {

    // Setting up the consumer of the context API with a "useContext" hook
    const text = useContext(myContext);

    // On initial render the app crashes as there is nothing to render, thus we first check if there is a value below (stupid unforgiving React.js):
    if (!props.value) return null;

    // Declaring a function that triggers the deleteFunction which is passed as a prop from the parent component
    const remove = (i) => {
        props.deleteFunction(i);
    }

    // Declaring and binding inline style for the use in the template below. 
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
        // Below we are printing out the "<li>" items that we are printing above
        // We are most importantly using the Context which is declared above and passed with a provider within the "App.js" component
        <div>
            <ul>{listMap}</ul>
            <p>{text.hello}</p>
        </div>
    );
}
