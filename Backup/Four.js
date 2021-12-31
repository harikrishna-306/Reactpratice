import React, { Component } from 'react'

 class Four extends Component {
     state={
         msg:"hello good morning"
     }
     updatemsg=()=>{
         this.setState({msg:"GA"})
         this.setState({msg:"gn"})
     }
    render() {
        return (
            <div>
               <h1 className="text-primary">{this.state.msg}</h1> 
               <button onClick={this.updatemsg} className="btn btn-primary">updatemsg</button>
            </div>
        )
    }
}

export default Four
