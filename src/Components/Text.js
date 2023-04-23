import React from "react";
import { useState } from "react";

const Text = (props) => {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted To Uppercase", "success");
  };
  const handleloclick = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext);
    props.showAlert("Converted To Lowercase", "success");
  };

  const handlecclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text has been clear", "success");
  };

  const handlecopyclick = () => {
   var text = document.getElementById("myBox");
   text.select();
    navigator.clipboard.writeText(text.value);
  };

const handleextraspaces =()=>{
  let newText = text.split(/[ ]+/);
setText(newText.join(" "))
}
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handlechange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-2">{props.heading} </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handlechange}
            style={{
              backgroundColor: "light" ? "white" : "gray",
              color: props.mode === "dark" ? "black" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecclick}>
          Clear
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>
          Copy
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleextraspaces}>
          Remove Extraspace
        </button>
        <button  disabled={text.length===0}
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minitues for reading</p>
        <h3>Privew</h3>
        <p>{text.length>0?text:"Nathing to Priview"}</p>
      </div>
    </>
  );
};

export default Text;
