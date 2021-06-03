import React from 'react'


export default function State(props) {
    return (
        <div id="state-title">
            <div id="state-name">{props.name}</div>
            <div id="state-description">{props.description}</div>
        </div>
    )
}


