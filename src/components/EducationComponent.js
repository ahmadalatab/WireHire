import React from 'react';
import { Row, Col } from 'reactstrap';
import '../profile.scss';
import {User} from '../shared/UserProfile';

const Education = () => {

    const education = User[0]['education'];
    console.log(education);

    return (
        education.map((education) => {
            if (Object.keys(education).length !== 0) {
                return (
                    <div className="experience text-left" key={education.id}>
                        <Row className="my-2">
                            <Col xs={10} md={6} className="px-0 px-md-3 font-weight-bold">{education.school} - {education.degree}</Col>
                            <Col xs={{order: 3}} md={{span: 6, order: 2}} className="text-right pr-lg-5 pr-md-4">{education.startYear} - {education.endYear}</Col>
                            <Col md={{order: 3}} className="text-right pl-lg-5 pl-3">
                                <i className="fa fa-pencil"></i>
                            </Col>
                        </Row>
                        <Row className="mb-2">GPA: {education.gpa}</Row>
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