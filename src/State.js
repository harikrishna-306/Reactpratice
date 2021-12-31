import React, { Component } from 'react'

 class State extends Component {
     state={
        msg:"good morning"
     }
     gmHandler=()=>{
         this.setState({msg:"goodafternooon"})
     }
     gnHandler=()=>{
        this.setState({msg:"goodnight"})
    }
    render() {
        return (
            <div>
                <h1 className="text-primary">{this.state.msg}</h1>
                <button onClick={this.gmHandler} className='btn btn-danger'>gmHandler</button>
                <button onClick={this.gnHandler} className='btn btn-danger'>gnHandler</button>

            </div>
        )
    }
}
export default State