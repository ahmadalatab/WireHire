import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import '../profile.scss';

const ProfileModal = (props) => {

    //const [modal, setModal] = useState(false);

    //const toggle = () => setModal(!modal);

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered={true}>
            <ModalHeader>Edit</ModalHeader>
            <ModalBody>
                <Form onSubmit={props.submit}>
                    {props.form}
                    <div className="text-center">
                        <Button type="submit" color="primary">Save</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export const EducationModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered={true}>
            <ModalHeader>{props.action} Education</ModalHeader>
            <ModalBody>
                <Form onSubmit={props.submit}>
                    <FormGroup>
                        <Label htmlFor="school">School</Label>
                        <Input type="text" id="school" name="school" placeholder="School" defaultValue={props.school || ''} onChange={props.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="degree">Degree</Label>
                        <Input type="text" id="degree" name="degree" placeholder="Degree" defaultValue={props.degree || ''} onChange={props.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label htmlFor="startdate">Start Date</Label>
                                <Input type="text" id="startdate" name="startdate" placeholder="Start Date" defaultValue={props.startDate || ''} onChange={props.handleChange} />
                            </Col>
                            <Col>
                                <Label htmlFor="enddate">End Date</Label>
                                <Input type="text" id="enddate" name="enddate" placeholder="End Date" defaultValue={props.endDate || ''} onChange={props.handleChange} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="gpa">GPA</Label>
                        <Input type="text" id="gpa" name="gpa" placeholder="GPA" defaultValue={props.gpa || ''} onChange={props.handleChange} />
                    </FormGroup>
                    <div className="text-center">
                        <Button type="submit" color="primary">Save</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export const ExperienceModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle} centered={true}>
            <ModalHeader toggle={props.toggle}>{props.action} Experience</ModalHeader>
            <ModalBody>
                <Form onSubmit={props.submit}>
                    <FormGroup>
                        <Label htmlFor="company">Company</Label>
                        <Input type="text" id="company" name="company" placeholder="Company" defaultValue={props.company || ''} onChange={props.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input type="text" id="title" name="title" placeholder="Title" defaultValue={props.title || ''} onChange={props.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label htmlFor="startdate">Start Date</Label>
                                <Input type="text" id="startdate" name="startdate" placeholder="Start Date" defaultValue={props.startDate || ''} onChange={props.handleChange} />
                            </Col>
                            <Col>
                                <Label htmlFor="enddate">End Date</Label>
                                <Input type="text" id="enddate" name="enddate" placeholder="End Date" defaultValue={props.endDate || ''} onChange={props.handleChange} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="description">Description</Label>
                        <Input type="textarea" id="description" name="description" placeholder="Description" defaultValue={props.description || ''} onChange={props.handleChange} />
                    </FormGroup>
                    <div className="text-center">
                        <Button type="submit" color="primary">Save</Button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default ProfileModal;