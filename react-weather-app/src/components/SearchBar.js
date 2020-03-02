import React, { useState } from 'react';


export const SearchBar = ({ setQuery }) => {

    let [content, setContent] = useState("")

    let handleChange = (e) => {
        e.preventDefault();
        setContent(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        let trimmedContent = content.trim();
        if (trimmedContent.length !== 0 && trimmedContent) {
            setQuery(trimmedContent);
        }
        setContent("");
    }

    const divStyle = {
        position: "absolute",
        top: "0",
        right: "0",
        margin: "5px 5px 0px 0px",
        color: "#364369"
    }

    return (
        <div style={divStyle}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Search:</label>
                <input type="text" onChange={handleChange} value={content}></input>
                <button id="submit" style = {{color:"#364369"}}>Submit!</button>
            </form>
        </div>

    );



}