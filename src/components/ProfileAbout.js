import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';

const About = () => {

    const aboutUser = User[0]['about'];

    const [modal, setModal] = useState(false);
    const [inputs, setInputs] = useState({});

    const toggle = () => setModal(!modal);

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
    }

    return (
        aboutUser.map((info) => {
            return (
                <div className="info text-center" key={info.id}>
                    <div className="align-items-center px-sm-2 py-2 mb-2 header">
                        <div>
                            <h2>{info.firstName} {info.lastName}</h2>
                            <div>{info.email}</div>
                            <div>{info.phoneNum}</div>
                            <div>{info.location}</div>
                        </div>
                        <h2><i className="fa fa-pencil" onClick={toggle}></i></h2>
                    </div>
                    <Modal isOpen={modal} toggle={toggle} centered={true}>
                        <ModalHeader toggle={toggle}>Edit About</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="username">Name</Label>
                                    <Input type="text" id="name" name="name" placeholder="Name" defaultValue={`${info.firstName} ${info.lastName}`} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" name="email" placeholder="Email" defaultValue={info.email} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="phoneNum">Phone Number</Label>
                                    <Input type="text" id="phoneNum" name="phoneNum" placeholder="Phone Number" defaultValue={info.phoneNum} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="location">Location</Label>
                                    <Input type="text" id="location" name="location" placeholder="Location" defaultValue={info.location} onChange={handleChange} />
                                </FormGroup>
                                <div className="text-center">
                                    <Button type="submit" color="primary">Save</Button>
                                </div>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
            )
        })
    )
}

export default About;