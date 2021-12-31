import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import ContactApp from './ContactApp'
import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
class App extends Component {

    render() {
        return (
            <div>
                <h1>hello welcome to react</h1>
                {/*<ContactApp />*/}
                
                <Router>
                <Navbar/>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/contact' element={<Contact />} />    
                    </Routes>
                </Router>
                
            </div>
        )
    }
}

export default App
