import React, { Component } from 'react'
{/*form handling*/}


export default class five extends Component {
    state={name:"",
    password:""
}
nameHandler=(e)=>{
    this.setState({name:e.target.value});
    console.log(e.target.value)
}
passwordHandler=(e)=>{
    this.setState({password:e.target.value})
    console.log(e.target.value)
}
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <form>
                    <lable>name</lable>
                    <input type="text" onChange={this.nameHangler}/><br/>
                    <lable>password</lable>
                    <input type="text" onChange={this.passwordHangler}/><br/>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}
