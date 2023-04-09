import React from 'react';
import "../styles/Title.css"

function Title (props) {
    return (
        <>
        <h1 className='title'>{props.title}</h1>
        </>
    )
}

export { Title };