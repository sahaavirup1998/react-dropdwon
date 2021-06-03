import React from 'react'


export default function City(props) {
    return (
        <div id="city-title">
            <div id="city-name">{props.name}</div>
            <div id="city-description">{props.description}</div>
        </div>

    )

}