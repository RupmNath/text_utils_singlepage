//type rfc for sort and {useState}
import React, { useState } from "react";
export default function TextForm(props) {

  //state diclaration
  //text is input
  //setText is output after performing operation
  const [text, setText] = useState("");

  //using 'regex'
  //text.split(/\s+/) splits the text by one or more whitespace characters.
  //.filter((element) => element.length !== 0) removes any empty strings from the resulting array.
  const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;

  //using 'regex'
  //The expression text.replace(/\s/g, "").length calculates the number of characters in 
  //a string excluding all whitespace characters (spaces, tabs, line breaks).
  const charCount = text.replace(/\s/g, "").length;

  //reading time per char
  const readingTime = (0.002 * text.length).toFixed(3);

  //uppercase function
  const handleUppercaseClick = () => {
    console.log("Uppercase btn clicked!");
    //store uppercase text value in new varable 
    let newText = text.toUpperCase();
    //pass this new variable's value as paremeter of setText
    setText(newText);
    props.showAlert("Text converted to uppercase!","success")
  };

  //Lowercase function
  const handleLowercaseClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase!","success")
  }

  //clear text function
  const handleCleartextClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!","success")
  }



  //copy text
  const handleCopyClick = () => {
    var text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!","success")
  }


  //remove extra spaces using 'regex'
  const handleRemoveSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success")
  }

  //change function
  const handleTextOnChange = (event) => {
  console.log("Text edited!")
  // set new text and replace the previous text
  setText(event.target.value);
  };


  return (
    <>
      {/* from bootstrap Form control */}
      <div className={`mb-3 text-${props.textColor}`}>
      <h1> {props.heading} </h1>
        <textarea className={`form-control text-${props.textColor} bg-${props.formBackground}`}  value={text} onChange={handleTextOnChange} id="textBox" rows="10"></textarea>
      </div>
      {/* Uppercase btn */}
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleUppercaseClick}>
        Convert to Uppercase
      </button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleLowercaseClick}>
        Convert to Lowercase
      </button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCleartextClick}>
        Clear text
      </button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>
        Copy
      </button>
      <button type="button" className="btn btn-primary my-2 mx-2" onClick={handleRemoveSpaceClick}>
        Remove Extra Spaces
      </button>
      <div className={`container my-3 text-${props.textColor}`}>
        <h2>Text Summery</h2>
        {/* word and text length */}
        <p>{wordCount} words</p>
        <p>{text.length} characters including blank spaces</p>
        <p>{charCount} characters without spaces</p>
        <p>{readingTime} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
