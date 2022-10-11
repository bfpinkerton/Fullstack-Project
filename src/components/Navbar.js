import React from 'react'
import { News } from './Pages/News';
import { Link } from 'react-router-dom';
import "./NavbarStyles.css";



export const Navbar = () => {
  return (
    <nav>
        <a href="/">Home</a>
        <div>
            <ul id="navbar">

                <li><a href="news">News</a></li>
                <li><a href="links">Links</a></li>
                <li><a href="pics">Pics</a></li>
                <li><a href="vids">Vids</a></li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
