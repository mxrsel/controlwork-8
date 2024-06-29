import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="/">Quotes Central</Link>
            </div>
            <div className="categories">
                <ul>
                    <li><Link to="/quotes">All</Link></li>
                    <li><Link to="/quotes/star-wars">Star wars</Link></li>
                    <li><Link to="/quotes/famous-people">Famous People</Link></li>
                    <li><Link to="/quotes/saying">Saying</Link></li>
                    <li><Link to="/quotes/humour">Humor</Link></li>
                    <li><Link to="/quotes/motivational">Motivational</Link></li>
                </ul>
            </div>
            <div className="actions">
                <Link to="/add">Submit new quote</Link>
            </div>
        </nav>
    );
};

export default Navbar;
