import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let nexText = text.toUpperCase();
    setText(nexText);
  };
  const handleLoClick = () => {
    let nexText = text.toLowerCase();
    setText(nexText);
  };
  const handleClearClick = () => {
    let nexText = "";
    setText(nexText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowecase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {-1 + text.split(" ").length} words,{text.length} characters
        </p>
        <p>{0.008 * (-1 + text.split(" ").length)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
