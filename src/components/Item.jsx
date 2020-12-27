import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function Item(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone((prevValue) => {
            return !prevValue;
        });
    }

    return (
        <div onClick={handleClick}>
            <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
                {props.text}
            </li>
            <Button variant="contained" color="secondary" size="small" onClick={() => { props.deleteTask(props.id) }}>
                Delete
            </Button>
        </div>
    );
}

export default Item;