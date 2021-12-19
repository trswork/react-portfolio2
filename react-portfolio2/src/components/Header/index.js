import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from '../Nav';

function Header() {

    return (
        <header className="flex-row px-1">
        <div>    
        <h1>Tenee R</h1>
        <Navbar></Navbar>
        </div>
        </header>
    );
}

export default Header;