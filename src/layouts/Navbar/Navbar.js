import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import NotiDropdown from './components/NotiDropdown';

const Navbar = () => {
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>GitLinks</Link>
                    <NotiDropdown/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
