import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Form} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <Navbar sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">WireHire</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="mr-auto">
                            <NavItem className="nav-item">
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile">
                                    Profile
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/jobs">
                                    Jobs
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Form inline>                         
                            <Button className="float-sm-right" variant="outline-success">Login</Button>
                        </Form>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Header;