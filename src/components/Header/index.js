import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styles
import './Header.scss'

const Header = () => {
    const location = useLocation();

    return (
        <section className="Header">
            <div className="container">
                <ul className="Header__list">
                    <li className="Header__item">
                        <a className="Header__link" href="https://headworks.io/">HeadWorks</a>
                    </li>
                    <li className="Header__item">
                        {
                            location.pathname.includes('/userList') ? 
                            <Link className="Header__link" to="/registration">Sing in</Link> 
                            : <Link className="Header__link" to="/userList">Back</Link> 
                        }
                    </li>
                    <li className="Header__item">
                        <Link className="Header__link" to="/about">About me</Link> 
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Header;