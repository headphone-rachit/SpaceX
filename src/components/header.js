import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                <div className="container">
                <NavbarBrand href="/"><img src='assets/images/spaceXimg.jpg' height= "100vh" width ="250rem" alt='SpaceX' /></NavbarBrand>
                </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;