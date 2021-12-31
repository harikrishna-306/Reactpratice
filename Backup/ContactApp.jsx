import React, { Component } from 'react'
import Axios from 'axios';
{/* Axios Concept */ }
class ContactApp extends Component {
    state={contacts:[]}

    componentDidMount=()=>{
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((res)=>{
            this.setState({contacts:res.data})
            console.log(res)
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    render() {
        return (
            <div>
                           <div className='container'>
                               <div className='row'>
                                   <div className='col-md-8'>
                                       <table className='table' style={{border:"2px solid red"}}>
                                           <thead>
                                               <tr>
                                                   <th>Name</th>
                                                   <th>Email</th>
                                                   <th>Gender</th>
                                               </tr>
                                           </thead >
                                            <tbody>
                                                {
                                                    this.state.contacts.map((contact)=>{
                                                       return( <tr key={contact.login.uuid}>
                                                    <td>{contact.name.first}</td>
                                                    <td>{contact.email}</td>
                                                    <td>{contact.gender}</td>
                                                </tr>
                                                       )
                                                    })
                                                
                                                }
                                            </tbody>
                                       </table>
                                   </div>
                                   
                               </div>
                           </div>
                 
            </div>
        )
    }
}

export default ContactApp;
