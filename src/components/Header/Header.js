import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="links">
                <Link to="/form">Form</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;