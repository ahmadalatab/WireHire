import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';
import { EducationModal } from './ProfileModal';

const Education = () => {

    const education = User[0]['education'];

    const [modalID, setModalID] = useState(null);
    const [inputs, setInputs] = useState({});
    const toggleModal = (e, idx) => setModalID(idx);

    const [modal, setModal] = useState(false);
    const toggleAddForm = () => setModal(!modal);

    const handleChange = (e) => {
        setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
    }

    return (
        <div className="educationSection">
            <div className="align-items-center px-sm-2 py-2 header">
                <h2>Education</h2>
                <h2><i className="fa fa-plus" onClick={toggleAddForm}></i></h2>
                <EducationModal
                    isOpen={modal}
                    toggle={toggleAddForm}
                    action="Add"
                    handleChange={handleChange}
                    submit={handleSubmit}
                />
            </div>
            {education.map((education, idx) => {
                if (Object.keys(education).length !== 0) {
                    return (
                        <div className="education text-left" key={education.id}>
                            <Row className="my-2 mx-0 w-100">
                                <Col xs={7} lg={5} className="p-0 font-weight-bold">{education.school} - {education.degree}</Col>
                                <Col xs={{ order: 3 }} md={{ order: 2 }} className="p-0 col-xs-5 col-lg-5 text-lg-center">{education.startDate} - {education.endDate}</Col>
                                <Col lg={{ order: 3 }} className="p-0 col text-right">
                                    <i className="fa fa-pencil px-2" onClick={e => toggleModal(e, idx)}></i>
                                    <i className="fa fa-times px-2 "></i>
                                </Col>
                            </Row>
                            <Row className="mb-2 mx-0">GPA: {education.gpa}</Row>
                            <EducationModal
                                isOpen={modalID === idx}
                                toggle={toggleModal}
                                action="Edit"
                                submit={handleSubmit}
                                school={education.school}
                                degree={education.degree}
                                startDate={education.startDate}
                                endDate={education.endDate}
                                gpa={education.gpa}
                                handleChange={handleChange}
                            />
                        </div>
                    )
                }
                else {
                    return <div className="py-4">No education to display</div>
                }
            })}
        </div>
    )
}

export default Education;