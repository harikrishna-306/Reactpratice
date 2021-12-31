import React, { Component } from 'react'

class Counter extends Component {
state={
    counter:0
}
incr=()=>{
    this.setState({counter:this.state.counter+1})
}

decr=()=>{
    this.setState({counter:this.state.counter-1})
}
    render() {
        return (
            <div>
                <h1 className="text-danger">{this.state.counter}</h1>
                <button onClick={this.incr} className='btn btn-danger'>Incr</button>
                <button onClick={this.decr} className='btn btn-danger'>Decr</button>
            </div>
        )
    }
}
export default Counter
