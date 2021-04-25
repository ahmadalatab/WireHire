import React from 'react';
import { Row, Col } from 'reactstrap';
import '../profile.scss';
import {User} from '../shared/UserProfile';

const Experience = () => {

    const workExperiences = User[1]['workExperience'];

    return (
        workExperiences.map((experience) => {
            return (
                <div className="experience text-left" key={experience.id}>
                    <Row className="my-2">
                        <Col>{experience.company}</Col>
                        <Col className="text-right">{experience.startDate} - {experience.endDate}</Col>
                    </Row>
                    <p>{experience.title}</p>
                    <div>
                        {experience.responsibilites}
                    </div>
                </div>
            )
        })
    )
}

export default Experience;