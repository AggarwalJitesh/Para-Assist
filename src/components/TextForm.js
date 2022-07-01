import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        const newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container my-3' style={{ color: props.theme === 'dark' ? 'white' : '#2d3339' }}>
                <h2>
                    {props.heading}
                </h2>

                <div>
                    <textarea  class="w-100" value={text} cols=" " rows="10"></textarea>
                </div>

                <button className="btn btn-info mx-1" onClick={handleUpClick}  >
                    Convert To Upper
                </button>

                <button className="btn btn-info" onClick={handleLoClick}  >
                    Convert To Lower
                </button>
            </div>
            <div className='container my-3' style={{ color: props.theme === 'dark' ? 'white' : '#2d3339' }}>
                <h1> Text Summary </h1>
                <p> Text has {text.split(" ").length-1} words and {text.length} characters </p>
                <center> 
                    <h3>Preview </h3>
                    <p> {text.length>0?text:"Enter Name of the Dish"} </p>
                </center>
            </div>

        </>

    );
}
