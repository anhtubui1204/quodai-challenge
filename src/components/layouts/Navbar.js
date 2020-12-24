import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link class="navbar-brand" to={"/"}>GitLinks</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
