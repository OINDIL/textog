import React, { useState } from 'react'
import PasswordStrength from './PasswordStrength';
export default function TextArea(props) {

    const [text, setText] = useState("")

    function lengthOfWord() {
        const wordsArray = text.match(/\S+/g);
        return wordsArray ? wordsArray.length : 0;
    }
    function noOfChars(){
        const stringWithoutSpaces = text.replace(/\s/g, '');
        return stringWithoutSpaces.length;
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
        <>
            <div>
                <label htmlFor="myBox" className="form-label my-3"><span style={{ fontSize: '25px' }}>{props.title}</span></label>
                <textarea id="myBox" rows="10" className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(48, 49, 52)', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={onChangeHandler}></textarea>
                <div id="buttons">
                    <button className="btn btn-danger" onClick={generatePass}>Generate Secure password</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'}`} disabled={text.length === 0} onClick={textUpperCase}>To Uppercase</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'}`} disabled={text.length === 0} onClick={textLowerCase}>To Lowercase</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'}`} disabled={text.length === 0} onClick={alternateText}>aLtErNaTiNg tExT</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'}`} disabled={text.length === 0} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button className={`btn btn-primary`} disabled={text.length === 0} onClick={copyText}><i className="ri-clipboard-line"></i>copy</button>
                    <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'}`} disabled={text.length === 0} onClick={textClear}><b><i className="ri-delete-bin-6-line"></i></b></button>
                </div>
            </div>
            <div id="info-text" className="container">
                <h4 style={{ textDecoration: "underline" }}>Info about the text</h4>
                <div id="info-section" className={`d-flex`} style={{ alignItems: "center" }}>
                    <section style={{ border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}`, padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>{lengthOfWord()}</section>
                    <h5 className='mx-2 my-1'>words and</h5>
                    <section style={{ border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}`, padding: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>{noOfChars()}</section>
                    <h5 className='mx-2 my-1'>characters.</h5>
                </div>
            </div>
            <PasswordStrength mode={props.mode}/>
            <div className="footer">
                <p>Made with 💖 by Oindil</p>
                <div className='icons'>
                    <a href="https://github.com/OINDIL" target='_blank' rel="noreferrer"><i className={`bx bxl-github text-${props.mode === 'dark' ? 'light' : 'dark'}`}></i></a>
                    <a href="https://www.instagram.com/oindil.golder/" target='_blank' rel="noreferrer"><i className={`bx bxl-instagram-alt text-${props.mode === 'dark' ? 'light' : 'dark'}`}></i></a>
                    <a href="https://www.linkedin.com/in/oindil-golder" target='_blank' rel="noreferrer"><i className={`bx bxl-linkedin-square text-${props.mode === 'dark' ? 'light' : 'dark'}`}></i></a>
                </div>
            </div>
        </>
    )
}
