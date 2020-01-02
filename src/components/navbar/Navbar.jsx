import React from "react";
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className={c.nav}>
                <div className={c.item}>
                    <NavLink to='/users' activeClassName={c.active}>Пользователи</NavLink>
                </div>
                <div className={c.item}>
                    <NavLink to='/reports' activeClassName={c.active}>Отчеты</NavLink>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;

