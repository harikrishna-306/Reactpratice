import React from 'react'
import Three from "./Three"

 function Two(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <Three name={"props.name"}/>
        </div>
    )
}
export default Two;