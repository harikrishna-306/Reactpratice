import React from 'react'

 function Two(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} style={{height:"250px", width:"250px",marginLeft:"50px"}}/>
        </div>
    )
}
export default Two;