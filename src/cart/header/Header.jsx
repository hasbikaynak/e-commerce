import React, { useState } from 'react'
import {
    Collapse, Navbar, NavbarBrand, NavbarToggler,
    Nav, NavItem, NavLink, NavbarText
} from 'reactstrap'
import './header.css';
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    //using the useState hook for handling the toggle ot navbar button
    const [menuOpen, setMenuOpen] = useState(false);

    //function that handle the true and false state of toggle menu button
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <div>
            <Navbar light expand="lg">
                <NavbarBrand>
                    <img src={logo} style={{ width: 100 }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggleMenu} />
                {/* this collapse is a dropown UI reactstrap component */}
                <Collapse isOpen={menuOpen}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink id='links' href="#">Products</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id='links' tag={Link} to="/contact">Contact Us </NavLink>
                        </NavItem>
                    </Nav>

                </Collapse>

            </Navbar>
        </div>
    )
}

export default Header