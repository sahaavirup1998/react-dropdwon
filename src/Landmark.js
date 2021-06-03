import React from 'react'


export default function Landmark(props) {
    return (
        <div id="landmark-title">
            <div id="landmark-name">{props.name}</div>
            <div id="landmark-description">{props.description}</div>
        </div>

    )

}