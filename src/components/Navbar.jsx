
import { FaBars, FaTimes } from 'react-icons/fa'
//import logo from './images/mindmadelucid.png'

import React, { Component, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Container } from 'react-bootstrap';

//import './bootstrap/bootstrap.min.css'
import './Navbar.css'

const Navbar1 = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        

        
      
    
        <div className='header'>
            <nav className='navbar'>
                
            
    </nav>
    </div>
    
    );
}

export default Navbar1