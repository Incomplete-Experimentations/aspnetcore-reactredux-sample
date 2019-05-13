import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default class NavMenu extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-dark sticky-top bg-dark">
                <a class="navbar-brand" href="/">Chainbridge Technologies</a>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="/">Home</a>
                        <a class="dropdown-item" href="/counter">Counter</a>
                        <a class="dropdown-item" href="/fetch-data">Fetch Data</a>
                    </div>
                </div>
            </nav>

        );
    }
}
