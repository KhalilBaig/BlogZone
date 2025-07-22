import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="logo">Blog Zone</div>
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
                    <NavLink to="/" className="navLink" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/blogs" className="navLink" onClick={closeMenu}>Blogs</NavLink>
                    <NavLink to="/categories" className="navLink" onClick={closeMenu}>Categories</NavLink>
                    <NavLink to="/authors" className="navLink" onClick={closeMenu}>Authors</NavLink>
                    <NavLink to="/contact" className="navLink" onClick={closeMenu}>Contact</NavLink>
                </nav>
                <div className="burger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>

            
        </>
    );
}

export default Header;
