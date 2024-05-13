import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to='/'><h1>Rocket Airlines</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>                
                <Link to="/all-flights">View Flight</Link>
                {/* <Link>Flight Status</Link> */}
            </div>
        </nav>
    );
}
 
export default Navbar;