import React from 'react';
import { Row, Col } from 'reactstrap';
import '../profile.scss';
import { User } from '../shared/UserProfile';

const Experience = () => {

    const workExperiences = User[0]['workExperience'];

    return (
        workExperiences.map((experience) => {
            if (Object.keys(experience).length !== 0) {
                return (
                    <div className="experience text-left" key={experience.id}>
                        <Row className="my-2">
                            <Col xs={10} md={6} className="px-md-3 font-weight-bold">{experience.company}</Col>
                            <Col xs={{order: 3}} md={{span: 6, order: 2}} className="text-right pr-lg-5 pr-md-4">{experience.startDate} - {experience.endDate}</Col>
                            <Col md={{order: 3}} className="text-right pl-lg-5 pl-3">
                                <i className="fa fa-pencil"></i>
                            </Col>
                        </Row>
                        <Row className="mb-2">{experience.title}</Row>
                        <Row className="mb-2">
                            {experience.responsibilites}
                        </Row>
                    </div>
                )
            }
            else {
                return <div className="py-4">No work experience to display</div>
            }
        })
    )
}

export default Experience;