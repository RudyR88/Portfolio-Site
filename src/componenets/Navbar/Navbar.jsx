import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar space-between container capitalize'>
        <a href="#main-content">Skip to main content</a>
        <ul className='nav-list'>
                <li><a href="#skills">skills</a></li>
                <li><a href="#projects">projects</a></li>
                <li><a href="#about-me">about me</a></li>
                <li><a href="/resume">resume</a></li>
        </ul>
    </nav>
  )
}
