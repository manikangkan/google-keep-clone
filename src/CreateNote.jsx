import React, { useState } from "react";
import("./App.css");

export default function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  function getNote(event) {
    const { name, value } = event.target;

    // setNote((oldData) => {
    //   console.log(oldData);
    //   return {
    //     ...oldData,
    //     [name]: value,
    //   };
    // });
    setNote({
      ...note,
      [name]: value,
    });
  }

  function addNote() {
    props.addNoteBtnPass(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expandTitle() {
    setExpand(true);
  }
  function shrinkTitle() {
    setExpand(false);
  }
  return (
    <div className="createnote">
      <div className="form">
        {expand ? (
          <input
            type="text"
            placeholder="Title"
            onChange={getNote}
            value={note.title}
            name="title"
          />
        ) : null}
        <textarea
          placeholder="Take a note..."
          onChange={getNote}
          value={note.content}
          name="content"
          autoFocus
          onClick={expandTitle}
          onDoubleClick={shrinkTitle}
        ></textarea>
      </div>
      {expand ? <button onClick={addNote}>+</button> : null}
    </div>
  );
}
