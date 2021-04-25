import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
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
                            <span>                         
                                <Button className="navbar-text float-sm-right" variant="outline-success" onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" />Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} >Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" placeholder="username" innerRef={input => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" placeholder="password" innerRef={input => this.password = input} />
                            </FormGroup>
                                <Button className="modalLogin" type="submit" value="submit" color="info">Login</Button>
                                <p class="message">Not registered? <a href="#">Create an account</a></p>
                        </Form>
                    </ModalBody>
                </Modal>             
            </React.Fragment>
        );
    }
}

export default Header;