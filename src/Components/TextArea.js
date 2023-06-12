import React, { useState } from 'react'

export default function TextArea(props) {

    const [text, setText] = useState("")
    
    function lengthOfWord() {
        let count = 0
        for (let i = 0; i < text.split(" ").length; i++) {
            if (text.split(" ")[i] == "") { // converting to array and iterating the whole array through the for loop
                count++
            }
        }
        return text.split(" ").length - count
    }
    function textUpperCase() {
        setText(text.toUpperCase())
        props.showAlert("Text converted to UPPERCASE", "success")
    }

    function textLowerCase() {
        setText(text.toLowerCase())
        props.showAlert("Text converted to lowercase", "success")
    }
    function alternateText() {
        let newText = ""
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toLowerCase()
            }
            else {
                newText += text[i].toUpperCase()
            }
        }
        setText(newText)
        props.showAlert("Text converted to aLtErNaTiNg cAsE", "success")
    }

    function generatePass() {
        let upp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        let low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let sym = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '¢', '£', '¥']
        let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        let emptStr = ""
        for (let i = 0; i < 4; i++) {
            emptStr += upp[parseInt(Math.random() * 26)]
            emptStr += low[parseInt(Math.random() * 26)]
            emptStr += sym[parseInt(Math.random() * 12)]
            emptStr += nums[parseInt(Math.random() * 10)]
        }
        setText(emptStr)
        props.showAlert("Password Generated!", "success")
    }
    function removeExtraSpaces() {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    function copyText() {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied", "success")
    }

    function textClear() {
        setText("")
        props.showAlert("TextArea Cleared", "success")
    }
    function onChangeHandler(event) {
        setText(event.target.value)
    }
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label my-3"><span style={{ fontFamily: "fira code", fontSize: 25 }}>{props.title}</span></label>
                <textarea id="myBox" rows="10" className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(48, 49, 52)', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={onChangeHandler}></textarea>

                <button className="btn btn-primary my-2" disabled={text.length===0} onClick={textUpperCase}>To Uppercase</button>
                <button className="btn btn-success my-2" disabled={text.length===0} onClick={textLowerCase}>To Lowercase</button>
                <button className="btn btn-warning my-2" disabled={text.length===0} onClick={alternateText}>aLtErNaTiNg tExT</button>
                <button className="btn btn-danger" onClick={generatePass}>Generate Secure password</button>
                <button className="btn btn-outline-success" disabled={text.length===0} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-outline-secondary" disabled={text.length===0} onClick={copyText}>Copy Text</button>
                <button className="btn btn-outline-danger my-2" disabled={text.length===0} style={{ boxShadow: '0 0 0.75rem' }} onClick={textClear}><b>Clear</b></button>
            </div>
            <div className='container'>
                <h4>Info about the text</h4>
                <div className="d-flex">
                    <section style={{ border: "2px solid blue", width: 34, height: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>{lengthOfWord()}</section>
                    <h5 className='mx-2 my-1'>words</h5>
                    <section style={{ border: "2px solid green", width: 34, height: 35, display: "flex", justifyContent: "center", alignItems: "center" }}>{text.length}</section>
                    <h5 className='mx-2 my-1'>characters</h5>
                </div>
            </div>
        </div>
    )
}
