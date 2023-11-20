import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <div class="navbar-right">
                    <div class="navbar-logo"></div>
                    <div class="navbar-straight-line"></div>
                    <div class="navbar-right-text">STORIES</div>
                </div>
                <div class="navbar-left">
                    <button class="btn">Courses</button>
                </div>
            </nav>
            <header>
                <div class="header-image"></div>
            </header>
        </div>
    )
}

export default Navbar;