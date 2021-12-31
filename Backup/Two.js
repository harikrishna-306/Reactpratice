import React from 'react'

export default function Two(props) {
    return (
        <div>
            <h1>{props.name}</h1>       
            <img src={props.image}/>                        {/*function type={props.name } clas type={this.props.name}*/}
           
        </div>
    )
}
