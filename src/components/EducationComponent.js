import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';
import ProfileModal from './ProfileModal';

const Education = () => {

    const education = User[0]['education'];

    const [modalID, setModalID] = useState(null);

    const toggleModal = (e, idx) => setModalID(idx);

    const handleChange = (e) => {
        //setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const EducationForm = (props) => {
        return (
            <>
                <FormGroup>
                    <Label htmlFor="school">School</Label>
                    <Input type="text" id="school" name="school" placeholder="School" value={props.school || ''} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="degree">Degree</Label>
                    <Input type="text" id="degree" name="degree" placeholder="Degree" value={props.degree || ''} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date">Date</Label>
                    <Input type="text" id="date" name="date" placeholder="date" value={props.startDate || ''} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="desc">GPA</Label>
                    <Input type="text" id="gpa" name="gpa" placeholder="GPA" value={props.gpa || ''} onChange={handleChange} />
                </FormGroup>
            </>
        )
    }

    return (
        education.map((education, idx) => {
            if (Object.keys(education).length !== 0) {
                return (
                    <div className="education text-left" key={education.id}>
                        <Row className="my-2 mx-0 w-100">
                            <Col xs={7} lg={5} className="p-0 font-weight-bold">{education.school} - {education.degree}</Col>
                            <Col xs={{ order: 3 }} md={{ order: 2 }} className="p-0 col-xs-5 col-lg-5 text-lg-center">{education.startYear} - {education.endYear}</Col>
                            <Col lg={{ order: 3 }} className="p-0 col text-right">
                                <i className="fa fa-pencil px-2" onClick={e => toggleModal(e, idx)}></i>
                                <i className="fa fa-times px-2 "></i>
                            </Col>
                        </Row>
                        <Row className="mb-2 mx-0">GPA: {education.gpa}</Row>
                        <ProfileModal
                            isOpen={modalID === idx}
                            toggle={toggleModal}
                            form={
                                <EducationForm
                                    school={education.school}
                                    degree={education.degree}
                                    date={education.startDate}
                                    gpa={education.gpa}
                                />
                            }
                        />
                    </div>
                )
            }
            else {
                return <div className="py-4">No education to display</div>
            }
        })
    )
}

export default Education;