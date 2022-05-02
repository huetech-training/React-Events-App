import React, { Component } from 'react';
import {BrowserRouter,Link,Route, Routes} from "react-router-dom";
import Home from './home';
import Topics from './topics';
import Logout from './logout';
import './styles/header.css';
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <BrowserRouter>
            <div className="d-flex flex-row header-box">
            <div className='left-block'>
            <Link to="/" className="item m-2">
                Home
            </Link>
            </div>
            <div className='left-block'>
            <Link to="/topic" className="item m-2">
            Topics
            </Link>
            </div>
            <div className='right-block'>
            <Link to="/logout" className="item m-2">
            Logout
            </Link>
            </div>
            </div>
            <div>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/topic" element={<Topics />} />
                <Route path="/topic" element={<Topics />} />
                <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
            </BrowserRouter>
            </div>
        );
    }
}
 
export default Header;