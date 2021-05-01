import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';
import { ExperienceModal } from './ProfileModal';


const Experience = () => {

    const workExperiences = User[0]['workExperience'];

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
        <div className="experiencesSection">
            <div className="align-items-center px-sm-2 py-2 mb-2 header">
                <h2>Experience</h2>
                <h2><i className="fa fa-plus" onClick={toggleAddForm}></i></h2>
                <ExperienceModal
                    isOpen={modal}
                    toggle={toggleAddForm}
                    action="Add"
                    handleChange={handleChange}
                    submit={handleSubmit}
                />
            </div>
            {workExperiences.map((experience, idx) => {
                if (Object.keys(experience).length !== 0) {
                    return (
                        <div className="experience text-left" key={experience.id}>
                            <Row className="my-2 mx-0 w-100">
                                <Col xs={7} lg={5} className="p-0 font-weight-bold">{experience.company}</Col>
                                <Col xs={{ order: 3 }} md={{ order: 2 }} className="p-0 col-xs-5 col-lg-5 text-lg-center">{experience.startDate} - {experience.endDate}</Col>
                                <Col lg={{ order: 3 }} className="p-0 col text-right">
                                    <i className="fa fa-pencil px-2" onClick={e => toggleModal(e, idx)}></i>
                                    <i className="fa fa-times px-2 "></i>
                                </Col>
                            </Row>
                            <Row className="mb-2 mx-0">{experience.title}</Row>
                            <Row className="mb-2 mx-0">
                                {experience.responsibilites}
                            </Row>
                            <ExperienceModal
                                isOpen={modalID === idx}
                                toggle={toggleModal}
                                action="Edit"
                                company={experience.company}
                                title={experience.title}
                                startDate={experience.startDate}
                                endDate={experience.endDate}
                                responsibilites={experience.responsibilities}
                                handleChange={handleChange}
                            />
                        </div>
                    )
                }
                else {
                    return <div className="py-4">No work experience to display</div>
                }
            })}
        </div>
    )
}

export default Experience;