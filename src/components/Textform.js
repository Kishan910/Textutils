import React, { useState } from 'react'

export default function Textform(props) {
    const handleUppercase=()=>{
        setText(text.toUpperCase());
        props.showAlert("Coverted to Uppercase","success");
    }
    const handleLowercase=()=>{
        setText(text.toLowerCase());
        props.showAlert("Coverted to Lowercase","success");
    }
    const handleRemoveExtraSpace=()=>{
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        props.showAlert("Extra space removed","success");
    }
    const handleCopyText=()=>{
        let copiedText=document.getElementById("txtArea").value;
        navigator.clipboard.writeText(copiedText);
        props.showAlert("Text copied","success");
    }
    const handleClearText=()=>{
        setText("");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");
    
    return (
        <>
            <div className={`container`}>
                <div className="mb-3">
                    <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>{props.heading}</h3>
                    <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"#323435":"white",color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="txtArea" rows="9"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUppercase}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowercase}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace}>Remove ExtraSpace</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy text</button>
            </div>
            <div className="container my-3">
                <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Your text summary</h3>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Words and {text.length} characters</p>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>{0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} Minutes to read</p>
                <h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>Preview</h3>
                <p className={`text-${props.mode==="dark"?"light":"dark"}`}>{text}</p>
            </div>
        </>
  )
}
