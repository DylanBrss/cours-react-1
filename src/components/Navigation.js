import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}> {/* si la nav est active alors prendre en compte la class name "nav-active sinon prendre rien" */}
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;