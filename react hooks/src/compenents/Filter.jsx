import React, { useRef, useState } from "react";
import "/src/Filter.css";

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    let titleRef = useRef();
    let noteRef = useRef();

    const submitButton = () => {
        const newTitle = titleRef.current.value;
        const newNote = noteRef.current.value;

        setTitle(newTitle);
        setNote(newNote);

        // Call the onFilter prop with newTitle and newNote
        onFilter(newTitle, newNote);
    };

    return (
        <div className="filter">
            <input placeholder="Title" ref={titleRef} type="text" />
            <input placeholder="Note" ref={noteRef} type="text" />
            <button type="button" onClick={submitButton}>Confirm</button>
        </div>
    );
}

export default Filter;