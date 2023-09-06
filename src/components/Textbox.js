import React, { useState, useRef } from "react";

export default function Textbox(props) {
 const [inputText, setInputText] = useState("");
 const [modifiedText, setModifiedText] = useState("");
 const [wordcount, setWordCount] = useState(0);
 const textareaRef = useRef(null);

 const handleUpClick = () => {
  let newText = inputText.toUpperCase();
  setModifiedText(newText);
  props.setalertstatus("Converted to Uppercase", "success");
  updateWordCount(newText);
 };

 const handleLoClick = () => {
  let newText = inputText.toLowerCase();
  setModifiedText(newText);
  props.setalertstatus("Converted to Lowercase", "success");
  updateWordCount(newText);
 };

 const handleResetClick = () => {
  setInputText("");
  setModifiedText("");
  setWordCount(0);
  props.setalertstatus("Text erased", "danger");
 };

 const handleCopyClick = async () => {
  if (textareaRef.current) {
   try {
    await navigator.clipboard.writeText(textareaRef.current.value);
    props.setalertstatus("Text copied to clipboard", "success");
   } catch (error) {
    props.setalertstatus("Copying text failed", "danger");
   }
  }
 };

 const reversed = () => {
  let splitWord = modifiedText.split("");
  let reverseWord = splitWord.reverse("");
  let joinedWords = reverseWord.join("");
  setModifiedText(joinedWords);
  updateWordCount(joinedWords);
  props.setalertstatus("text reversed", "success");
};

const removeExtraSpaces = () => {
    let updatedText = modifiedText.replace(/\s+/g, " ");
    setModifiedText(updatedText);
    updateWordCount(updatedText);
    props.setalertstatus("Removed extra spaces", "success");
};

const removeAllSpaces = () => {
    let updatedText = modifiedText.replace(/\s/g, "");
    setModifiedText(updatedText);
    updateWordCount(updatedText);
    props.setalertstatus("Removed all spaces", "success");
 };

 const handleChange = (inputValue) => {
  setInputText(inputValue);
  updateWordCount(inputValue);
 };

 const updateWordCount = (inputValue) => {
    const trimmedValue = inputValue.trim();
    const wordArray = trimmedValue.split(/\s+/);
    const count = wordArray.length;
    setWordCount(count);
  };

 return (
  <>
   <div
    id="textouter"
    className={props.mode === "light" ? "text-black" : "text-white"}
    style={{ background: props.mode === "light" ? "white" : "#08325c" }}>
    <div className="container  text-center fs-bolder">
     <h3>Enter your text below</h3>
     <textarea
      className={`form-control my-1 ${
       props.mode === "light" ? "text-black" : "text-white"
      }`}
      id="exampleFormControlTextarea1"
      rows={5}
      onChange={(e) => handleChange(e.target.value)}
      value={inputText}
      ref={textareaRef}
      style={{ background: props.mode === "light" ? "white" : "#68a6e3" }}
     />
     <p>
      Word Count: {wordcount} Letter Count: {inputText.length}
     </p>
     <button
      disabled={inputText === ""}
      className="btn btn-primary mx-2 my-2"
      onClick={handleUpClick}>
      Convert to Uppercase
     </button>
     <button
      disabled={inputText === ""}
      className="btn btn-primary mx-2 my-2"
      onClick={handleLoClick}>
      convert to Lowercase
     </button>
     <button
      disabled={inputText === ""}
      className="btn btn-primary mx-2 my-2"
      onClick={reversed}>
      reverse sentence
     </button>
     <button
      disabled={inputText === ""}
      className="btn btn-primary mx-2 my-2"
      onClick={removeExtraSpaces}>
      remove extra WhiteSpace
     </button>
     <button
      disabled={inputText === ""}
      className="btn btn-primary mx-2 my-2"
      onClick={removeAllSpaces}>
      remove all WhiteSpace
     </button>
     <button
      disabled={inputText === ""}
      className="btn btn-success mx-2 my-2"
      onClick={handleCopyClick}>
      Copy to Clipboard
     </button>
     <button
      disabled={inputText === ""}
      className="btn btn-danger mx-2 my-2"
      onClick={handleResetClick}>
      Reset
     </button>
    </div>
    <div className="container my-1 text-center fs-bolder">
     <h3>Result Text Below:-</h3>
     <textarea
      className={`form-control my-1 ${
       props.mode === "light" ? "text-black" : "text-white"
      }`}
      id="updatedText"
      rows={5}
      readOnly
      value={modifiedText}
      style={{ background: props.mode === "light" ? "white" : "#68a6e3" }}
     />
    </div>
   </div>
  </>
 );
}
