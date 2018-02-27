import React, { Component } from 'react';

export default function button(props) {
    const buttonClass = props.className;
    const content = props.content;
    console.log(props);
    return (
        <button
            className={buttonClass}
            onClick={(event) => this.handleClick(event)}
        >
            {content}
        </button>
    );
}
