import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import OutputNote from "./OutputNote";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const [content, setContent] = useState([]);

  function addNoteBtn(note) {
    // setContent((oldData) => {
    //   return [...oldData, note];
    // });

    setContent([...content, note]);
    // console.log("Clicked");
    // console.log(note);
  }

  function onRemove(id) {
    // console.log(content);
    // console.log(id);
    setContent(
      content.filter((conData, index) => {
        return id !== index;
      })
    );
  }

  return (
    <>
      <Header />
      <CreateNote addNoteBtnPass={addNoteBtn} />
      {/* <OutputNote /> */}
      {content.map((ele, index) => {
        return (
          <OutputNote
            key={index}
            id={index}
            title={ele.title}
            content={ele.content}
            remItem={onRemove}
          />
        );
      })}
      <Footer />
    </>
  );
}
