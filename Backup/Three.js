import React, { Component } from 'react'

 class Three extends Component {
     state={count:0}

     updateCounter=()=>{
       this.setState({count:this.state.count+1})
     }
    render() {
        return (
            <div>
                
                <h1>count : {this.state.count}</h1>
                <button onClick={this.updateCounter}>counter</button>
                
            </div>
        )
    }
}

export default Three
