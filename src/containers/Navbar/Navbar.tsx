import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">Quotes Central</Link>
            </div>
            <div className="actions">
                <Link to="/add">Submit new quote</Link>
            </div>
        </nav>
    );
};

export default Navbar;
