import React from 'react';

export const Title = ({query}) => {

    const headerStyle = {
        color: "#364369",
        fontFamily: "arial",
        fontSize: "48px",
        marginLeft: "30px"
    }

    const divStyle = {
        marginLeft: "20px",
        width: "40%",
        borderWidth: "0px 0px 2px 0px",
        borderStyle: "solid",
        borderColor: "#364369"
    }

    return(
        <div style = {divStyle}>
            <h1 style = {headerStyle}>{query} Weather</h1>
        </div>
    )
}