import React from "react";
import("./App.css");

export default function OutputNote(props) {
  function remNote() {
    props.remItem(props.id);
  }
  return (
    <div className="outputnote">
      <div className="outputnote__inner">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={remNote}>🗑</button>
      </div>
    </div>
  );
}
