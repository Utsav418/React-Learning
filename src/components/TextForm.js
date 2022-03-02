import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUcClick = () =>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLcClick = () =>{
        // console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleOnChange = (event) =>{
        // console.log('On Convert')
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    // setText("new text")
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUcClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLcClick}>Convert to Lowercase</button>
        
        </div>
        <div className="container my-3">
            <h2> Your text Summary </h2>
            <p> {text.split(" ").length} {text.length} characters</p>
            <p> {0.008*text.split(" ").length} Minutes read </p>
            <h2> Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
