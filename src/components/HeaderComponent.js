import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

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
        const modalStyles = {
            overlay: {
              backgroundColor: '#ffffff',
            },
          };
        return (
            <React.Fragment>
                <Navbar sticky="top" className="navbar" expand="md" dark>
                    <div className="container">
                        <NavbarBrand className="mr-auto nav-item-color" href="/">WireHire</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link nav-item-color" to="/">
                                        <i className="fa fa-home fa-lg" /> Home
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link nav-item-color" to="/profile">
                                        <i className="fa fa-user" /> Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link nav-item-color" to="/jobs">
                                        <i className="fa fa-briefcase"/> Jobs
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span>
                                <Button className="navbar-text float-sm-right nav-item-color" variant="outline-success" onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <CSSTransition
                    in={this.state.isModalOpen}
                    timeout={300}
                    classNames="dialog"
                >
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={modalStyles} contentLabel="modal" closeTimeoutMS={2000}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
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
                                <p class="message">Not registered? <Link to="/signup" onClick={this.toggleModal}>Create an account</Link></p>
                        </Form>
                    </ModalBody>
                </Modal>
                </CSSTransition>             
            </React.Fragment>
        );
    }
}

export default Header;