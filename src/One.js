import React, { Component } from 'react'
import Two from "./Two"
 class One extends Component {
    render() {
        let name="hari"
        let image="http://www.spews.org/wp-content/uploads/2021/01/GettyImages-536116268-5b5d74e846e0fb0050adcf3b.jpg"
        return (
            <div>
               <Two name={name} image={image}/>
            </div>
        )
    }
}
export default One;
