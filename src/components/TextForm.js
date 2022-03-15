import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUcClick = () => {
        // console.log('Uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case !", "success")
    }
    const handleLcClick = () => {
        // console.log('Uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case !", "success")

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
        props.showAlert("Text has been cleared!", "success")

    }

    const handleOnChange = (event) => {
        // console.log('On Convert')
        setText(event.target.value)
    }

    const handleCopy = (event) => {
        console.log("I am copying...");
        var text = document.getElementById("myBox");
        text.select()
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been copied !", "success")

    }
    // const handleCopy = () => {
    //     navigator.clipboard.writeText(text);
    //     props.showAlert("Copied to Clipboard!", "success");
    // }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('')
    // setText("new text")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUcClick}>Convert to Uppercase</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLcClick}>Convert to Lowercase</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2> Your text Summary </h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read </p>
                <h2> Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
                
            </div>
        </>
    )
}
