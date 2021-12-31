import React from 'react'
import COmC from "./COmC"
export default function ComB(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <COmC name={props.name}/>
        </div>
    )
}
