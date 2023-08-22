import React from 'react'
import './styles.css'

function Navbar() {
    return (
        <header className='Navbar'>
            <h4 className='logo'>Christian</h4>
            <nav className='navbar'>
                <ul className='nav-list'>
                    <li className='nav-item'>Home</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Projects</li>
                    <li className='nav-item'>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar